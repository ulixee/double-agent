import pcap from 'pcap';
import { EventEmitter } from 'events';

export default function trackRemoteTcpVars(port: string | number) {
  const packets: {
    [source: string]: {
      windowSize: number;
      ttl: number;
    };
  } = {};
  const emitter = new EventEmitter();
  try {
    const tcpTracker = new pcap.TCPTracker();
    const pcapSession = new pcap.PcapSession(true, 'eth0', `ip proto \\tcp and tcp port ${port}`);

    tcpTracker.on('session', function(session) {
      console.log('Start of session between ' + session.src_name + ' and ' + session.dst_name);
    });

    tcpTracker.on('end', function(session) {
      console.log('End of TCP session between ' + session.src_name + ' and ' + session.dst_name);
    });

    pcapSession.on('packet', function(raw_packet) {
      const packet = pcap.decode.packet(raw_packet);
      const ethPayload = packet.payload;
      const ipv4 = ethPayload.payload;
      const tcpPayload = ipv4.payload;
      if (!tcpPayload || !ipv4) return;
      const addr = ipv4.saddr + ':' + tcpPayload.sport;
      if (!packets[addr]) {
        packets[addr] = {
          ttl: ipv4.ttl,
          windowSize: tcpPayload.windowSize,
        };
        emitter.emit(addr, packets[addr]);
      }
      tcpTracker.track_packet(packet);
    });
  } catch (err) {
    console.log(err);
  }

  async function getPacket(addr: string) {
    let packet = packets[addr];
    if (!packet) {
      packet = await new Promise(resolve => {
        emitter.once(addr, resolve);
      });
    }

    return packet;
  }
  return getPacket;
}

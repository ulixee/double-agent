# Puppeteer 2.1 - Chrome 80 + Stealth Plugin
Runs Puppeteer 2.1 with the Puppeteer Stealth Plugin. Runs Chrome 80 with a custom executable path.

## Emulating Chrome 79
Chrome 79 has a 42.2% desktop browser market share in the US as of 01/2020.

Detection | Tests | Inconsistency Detected | Flagged (not Called) | Failed Tests
--- | :---: | :---: | :---: | ---
Overall | 289 | 26 | 0
TCP Layer | 6 | 3 | 0 | - Packet TTL<br/>- Packet WindowSize<br/>
TLS Initial Handshake | 1 | 0 | 0 | 
TLS Grease Used | 1 | 0 | 0 | 
Can Set Cookies | 8 | 0 | 0 | 
Same Site Cookies | 2 | 0 | 0 | 
Cross Domain Cookies | 3 | 0 | 0 | 
Standard Http Headers | 10 | 1 | 0 | - Document - Default Headers in Order + Casing<br/>
Standard Https Headers | 10 | 1 | 0 | - Document - Default Headers in Order + Casing<br/>
Asset Headers | 108 | 12 | 0 | - Cross Domain Script - Default Headers in Order + Casing<br/>- Cross Domain Stylesheet - Default Headers in Order + Casing<br/>- Same Site Script - Default Headers in Order + Casing<br/>- Same Site Stylesheet - Default Headers in Order + Casing<br/>- Script - Default Headers in Order + Casing<br/>- Stylesheet - Default Headers in Order + Casing<br/>
Xhr Headers | 72 | 0 | 0 | 
Cors Preflight Headers | 24 | 4 | 0 | - Cross Domain Preflight - Default Headers in Order + Casing<br/>- Same Site Preflight - Default Headers in Order + Casing<br/>
Websocket Headers | 36 | 3 | 0 | - Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>
Audio Codecs Supported | 3 | 2 | 0 | - Audio "Maybe" Playback Codecs<br/>- Audio "Probably" Playback Codecs<br/>
Video Codecs Supported | 3 | 0 | 0 | 
WebRTC Audio Codecs Supported | 1 | 0 | 0 | 
WebRTC Video Codecs Supported | 1 | 0 | 0 | 

## Emulating Safari 13
Safari 13 has a 11.1% desktop browser market share in the US as of 01/2020.

Detection | Tests | Inconsistency Detected | Flagged (not Called) | Failed Tests
--- | :---: | :---: | :---: | ---
Overall | 233 | 95 | 0
TCP Layer | 2 | 0 | 0 | 
TLS Initial Handshake | 1 | 1 | 0 | - TLS Fingerprint Match<br/>
TLS Grease Used | 1 | 1 | 0 | - TLS Grease in ClientHello<br/>
Can Set Cookies | 8 | 0 | 0 | 
Same Site Cookies | 2 | 0 | 0 | 
Cross Domain Cookies | 3 | 1 | 0 | - Cross Site Page<br/>
Standard Http Headers | 10 | 3 | 0 | - Document - Default Headers in Order + Casing<br/>- Document - Header has a Browser Default Value for: Accept<br/>- Document - Header has a Browser Default Value for: Accept-Language<br/>
Standard Https Headers | 10 | 7 | 0 | - Document - Default Headers in Order + Casing<br/>- Document - Header has a Browser Default Value for: Accept<br/>- Document - Header has a Browser Default Value for: Accept-Language<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-User<br/>- Document - Header has a Browser Default Value for: Upgrade-Insecure-Requests<br/>
Asset Headers | 81 | 36 | 0 | - Cross Domain Image - Header has a Browser Default Value for: Accept<br/>- Cross Domain Image - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Script - Default Headers in Order + Casing<br/>- Cross Domain Script - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Stylesheet - Default Headers in Order + Casing<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Image - Header has a Browser Default Value for: Accept<br/>- Image - Header has a Browser Default Value for: Accept-Language<br/>- Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Image - Header has a Browser Default Value for: Accept<br/>- Same Site Image - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Script - Default Headers in Order + Casing<br/>- Same Site Script - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Stylesheet - Default Headers in Order + Casing<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Script - Default Headers in Order + Casing<br/>- Script - Header has a Browser Default Value for: Accept-Language<br/>- Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Stylesheet - Default Headers in Order + Casing<br/>- Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Xhr Headers | 56 | 18 | 0 | - Cross Domain Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Cors Preflight Headers | 18 | 8 | 0 | - Cross Domain Preflight - Default Headers in Order + Casing<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Preflight - Default Headers in Order + Casing<br/>- Same Site Preflight - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Preflight - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Preflight - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Websocket Headers | 33 | 12 | 0 | - Cross Domain Websocket - Upgrade - Default Headers in Order + Casing<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept-Encoding<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>- Same Site Websocket - Upgrade - Default Headers in Order + Casing<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept-Encoding<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>- Websocket - Upgrade - Default Headers in Order + Casing<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept-Encoding<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>
Audio Codecs Supported | 3 | 3 | 0 | - Audio "Maybe" Playback Codecs<br/>- Audio "Probably" Playback Codecs<br/>- Audio Recording Codecs<br/>
Video Codecs Supported | 3 | 3 | 0 | - Video "Maybe" Playback Codecs<br/>- Video "Probably" Playback Codecs<br/>- Video Recording Codecs<br/>
WebRTC Audio Codecs Supported | 1 | 1 | 0 | - WebRTC Audio MimeTypes and ClockRate Match<br/>
WebRTC Video Codecs Supported | 1 | 1 | 0 | - WebRTC Video MimeTypes and ClockRate Match<br/>

## Emulating Edge 18
Edge 18 has a 7.8% desktop browser market share in the US as of 01/2020.

Detection | Tests | Inconsistency Detected | Flagged (not Called) | Failed Tests
--- | :---: | :---: | :---: | ---
Overall | 233 | 117 | 0
TCP Layer | 2 | 1 | 0 | - Packet TTL<br/>
TLS Initial Handshake | 1 | 1 | 0 | - TLS Fingerprint Match<br/>
TLS Grease Used | 1 | 1 | 0 | - TLS Grease in ClientHello<br/>
Can Set Cookies | 8 | 0 | 0 | 
Same Site Cookies | 2 | 0 | 0 | 
Cross Domain Cookies | 3 | 2 | 0 | - Cross Site Page<br/>- Cross Site Secure Stylesheet<br/>
Standard Http Headers | 10 | 4 | 0 | - Document - Default Headers in Order + Casing<br/>- Document - Header has a Browser Default Value for: Accept<br/>- Document - Header has a Browser Default Value for: Accept-Language<br/>- Document - Header has a Browser Default Value for: Connection<br/>
Standard Https Headers | 10 | 7 | 0 | - Document - Default Headers in Order + Casing<br/>- Document - Header has a Browser Default Value for: Accept<br/>- Document - Header has a Browser Default Value for: Accept-Language<br/>- Document - Header has a Browser Default Value for: Connection<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-User<br/>
Asset Headers | 83 | 47 | 0 | - Cross Domain Image - Header has a Browser Default Value for: Accept<br/>- Cross Domain Image - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Image - Header has a Browser Default Value for: Connection<br/>- Cross Domain Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Script - Default Headers in Order + Casing<br/>- Cross Domain Script - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Script - Header has a Browser Default Value for: Connection<br/>- Cross Domain Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Stylesheet - Default Headers in Order + Casing<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Connection<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Image - Header has a Browser Default Value for: Accept<br/>- Image - Header has a Browser Default Value for: Accept-Language<br/>- Image - Header has a Browser Default Value for: Connection<br/>- Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Image - Header has a Browser Default Value for: Accept<br/>- Same Site Image - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Image - Header has a Browser Default Value for: Connection<br/>- Same Site Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Script - Default Headers in Order + Casing<br/>- Same Site Script - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Script - Header has a Browser Default Value for: Connection<br/>- Same Site Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Stylesheet - Default Headers in Order + Casing<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Connection<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Script - Default Headers in Order + Casing<br/>- Script - Header has a Browser Default Value for: Accept-Language<br/>- Script - Header has a Browser Default Value for: Connection<br/>- Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Stylesheet - Default Headers in Order + Casing<br/>- Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Stylesheet - Header has a Browser Default Value for: Connection<br/>- Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Xhr Headers | 54 | 24 | 0 | - Cross Domain Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Xhr - Header has a Browser Default Value for: Connection<br/>- Cross Domain Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Connection<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Xhr - Header has a Browser Default Value for: Connection<br/>- Same Site Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Connection<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Xhr - Header has a Browser Default Value for: Connection<br/>- Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Xhr - Post - Header has a Browser Default Value for: Connection<br/>- Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Cors Preflight Headers | 18 | 10 | 0 | - Cross Domain Preflight - Default Headers in Order + Casing<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Connection<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Preflight - Default Headers in Order + Casing<br/>- Same Site Preflight - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Preflight - Header has a Browser Default Value for: Connection<br/>- Same Site Preflight - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Preflight - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Websocket Headers | 33 | 12 | 0 | - Cross Domain Websocket - Upgrade - Default Headers in Order + Casing<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept-Encoding<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>- Same Site Websocket - Upgrade - Default Headers in Order + Casing<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept-Encoding<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>- Websocket - Upgrade - Default Headers in Order + Casing<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept-Encoding<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>
Audio Codecs Supported | 3 | 3 | 0 | - Audio "Maybe" Playback Codecs<br/>- Audio "Probably" Playback Codecs<br/>- Audio Recording Codecs<br/>
Video Codecs Supported | 3 | 3 | 0 | - Video "Maybe" Playback Codecs<br/>- Video "Probably" Playback Codecs<br/>- Video Recording Codecs<br/>
WebRTC Audio Codecs Supported | 1 | 1 | 0 | - WebRTC Audio MimeTypes and ClockRate Match<br/>
WebRTC Video Codecs Supported | 1 | 1 | 0 | - WebRTC Video MimeTypes and ClockRate Match<br/>

## Emulating Chrome 80
Chrome 80 has a 7% desktop browser market share in the US as of 01/2020.

Detection | Tests | Inconsistency Detected | Flagged (not Called) | Failed Tests
--- | :---: | :---: | :---: | ---
Overall | 289 | 26 | 0
TCP Layer | 6 | 3 | 0 | - Packet TTL<br/>- Packet WindowSize<br/>
TLS Initial Handshake | 1 | 0 | 0 | 
TLS Grease Used | 1 | 0 | 0 | 
Can Set Cookies | 8 | 0 | 0 | 
Same Site Cookies | 2 | 0 | 0 | 
Cross Domain Cookies | 3 | 0 | 0 | 
Standard Http Headers | 10 | 1 | 0 | - Document - Default Headers in Order + Casing<br/>
Standard Https Headers | 10 | 1 | 0 | - Document - Default Headers in Order + Casing<br/>
Asset Headers | 108 | 12 | 0 | - Cross Domain Script - Default Headers in Order + Casing<br/>- Cross Domain Stylesheet - Default Headers in Order + Casing<br/>- Same Site Script - Default Headers in Order + Casing<br/>- Same Site Stylesheet - Default Headers in Order + Casing<br/>- Script - Default Headers in Order + Casing<br/>- Stylesheet - Default Headers in Order + Casing<br/>
Xhr Headers | 72 | 0 | 0 | 
Cors Preflight Headers | 24 | 4 | 0 | - Cross Domain Preflight - Default Headers in Order + Casing<br/>- Same Site Preflight - Default Headers in Order + Casing<br/>
Websocket Headers | 36 | 3 | 0 | - Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>
Audio Codecs Supported | 3 | 2 | 0 | - Audio "Maybe" Playback Codecs<br/>- Audio "Probably" Playback Codecs<br/>
Video Codecs Supported | 3 | 0 | 0 | 
WebRTC Audio Codecs Supported | 1 | 0 | 0 | 
WebRTC Video Codecs Supported | 1 | 0 | 0 | 

## Emulating Firefox 72
Firefox 72 has a 5.1% desktop browser market share in the US as of 01/2020.

Detection | Tests | Inconsistency Detected | Flagged (not Called) | Failed Tests
--- | :---: | :---: | :---: | ---
Overall | 238 | 99 | 0
TCP Layer | 6 | 3 | 0 | - Packet TTL<br/>- Packet WindowSize<br/>
TLS Initial Handshake | 1 | 1 | 0 | - TLS Fingerprint Match<br/>
TLS Grease Used | 1 | 1 | 0 | - TLS Grease in ClientHello<br/>
Can Set Cookies | 8 | 0 | 0 | 
Same Site Cookies | 2 | 0 | 0 | 
Cross Domain Cookies | 3 | 0 | 0 | 
Standard Http Headers | 10 | 3 | 0 | - Document - Default Headers in Order + Casing<br/>- Document - Header has a Browser Default Value for: Accept<br/>- Document - Header has a Browser Default Value for: Accept-Language<br/>
Standard Https Headers | 10 | 6 | 0 | - Document - Default Headers in Order + Casing<br/>- Document - Header has a Browser Default Value for: Accept<br/>- Document - Header has a Browser Default Value for: Accept-Language<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Document - Header has a Browser Default Value for: Sec-Fetch-User<br/>
Asset Headers | 81 | 36 | 0 | - Cross Domain Image - Header has a Browser Default Value for: Accept<br/>- Cross Domain Image - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Script - Default Headers in Order + Casing<br/>- Cross Domain Script - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Stylesheet - Default Headers in Order + Casing<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Image - Header has a Browser Default Value for: Accept<br/>- Image - Header has a Browser Default Value for: Accept-Language<br/>- Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Image - Header has a Browser Default Value for: Accept<br/>- Same Site Image - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Image - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Image - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Script - Default Headers in Order + Casing<br/>- Same Site Script - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Stylesheet - Default Headers in Order + Casing<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Script - Default Headers in Order + Casing<br/>- Script - Header has a Browser Default Value for: Accept-Language<br/>- Script - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Script - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Stylesheet - Default Headers in Order + Casing<br/>- Stylesheet - Header has a Browser Default Value for: Accept-Language<br/>- Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Stylesheet - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Xhr Headers | 54 | 18 | 0 | - Cross Domain Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Xhr - Header has a Browser Default Value for: Accept-Language<br/>- Xhr - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Xhr - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Xhr - Post - Header has a Browser Default Value for: Accept-Language<br/>- Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Xhr - Post - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Cors Preflight Headers | 18 | 8 | 0 | - Cross Domain Preflight - Default Headers in Order + Casing<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Cross Domain Preflight - Header has a Browser Default Value for: Sec-Fetch-Site<br/>- Same Site Preflight - Default Headers in Order + Casing<br/>- Same Site Preflight - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Preflight - Header has a Browser Default Value for: Sec-Fetch-Mode<br/>- Same Site Preflight - Header has a Browser Default Value for: Sec-Fetch-Site<br/>
Websocket Headers | 36 | 15 | 0 | - Cross Domain Websocket - Upgrade - Default Headers in Order + Casing<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Connection<br/>- Cross Domain Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>- Same Site Websocket - Upgrade - Default Headers in Order + Casing<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Connection<br/>- Same Site Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>- Websocket - Upgrade - Default Headers in Order + Casing<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Accept-Language<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Connection<br/>- Websocket - Upgrade - Header has a Browser Default Value for: Sec-WebSocket-Extensions<br/>
Audio Codecs Supported | 3 | 3 | 0 | - Audio "Maybe" Playback Codecs<br/>- Audio "Probably" Playback Codecs<br/>- Audio Recording Codecs<br/>
Video Codecs Supported | 3 | 3 | 0 | - Video "Maybe" Playback Codecs<br/>- Video "Probably" Playback Codecs<br/>- Video Recording Codecs<br/>
WebRTC Audio Codecs Supported | 1 | 1 | 0 | - WebRTC Audio MimeTypes and ClockRate Match<br/>
WebRTC Video Codecs Supported | 1 | 1 | 0 | - WebRTC Video MimeTypes and ClockRate Match<br/>
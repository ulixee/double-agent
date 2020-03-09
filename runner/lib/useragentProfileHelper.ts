import Useragent, { Agent } from 'useragent';
import fs from 'fs';
import path from 'path';

export function getUseragentPath(useragent: string) {
  if (!useragent) return 'none';
  const userAgent = Useragent.lookup(useragent);
  return getAgentPath(userAgent);
}

export function getAgentPath(userAgent: Agent) {
  const os = userAgent.os.family.replace(/\s/g, '_').toLowerCase();
  const osv = userAgent.os.major + '_' + userAgent.os.minor;

  return `${os}_${osv}__${userAgent.family.toLowerCase()}_${userAgent.major}`;
}

export function saveUseragentProfile(useragent: string, data: any, profilesDir: string) {
  // http requests from webdriver sometimes have ruby profiles
  if (!useragent || useragent.startsWith('Ruby')) return;

  const profileDir = path.resolve(profilesDir);
  console.log(
    'Saving profile',
    profileDir
      .split('detections/')
      .pop()
      ?.split('/profiles')
      .shift(),
    useragent,
  );
  const browserPath = getUseragentPath(useragent);
  try {
    let counter = 0;
    let agentName = `${profileDir}/${browserPath}`;
    while (fs.existsSync(`${agentName}--${counter}.json`)) {
      counter += 1;
    }

    fs.writeFileSync(`${agentName}--${counter}.json`, JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(err);
  }
}
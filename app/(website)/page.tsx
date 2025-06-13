import path from 'path';
import fs from 'fs';
import HomeClient from './HomeClient';

export default function Home() {
  const dir = path.join(process.cwd(), 'public/img/annoucements');
  const files = fs.readdirSync(dir).filter((file) => /\.(png|jpe?g|svg)$/i.test(file));

  return <HomeClient imageFiles={files} />;
}

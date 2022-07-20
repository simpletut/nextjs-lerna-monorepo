import express, { Request, Response } from 'express';
import next from 'next';
import fs from 'fs';
import os from 'os';
import https from 'https';
import logger from './../utils/logger';
import helmet from 'helmet';

const port = process.env.PORT || 3002;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      frameguard: {
        action: 'sameorigin'
      }
    }));

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    const homeDir = os.homedir();
    const certDir = `${homeDir}/.consumer-certs`;

    if (fs.existsSync(certDir)) {
      const key = fs.readFileSync(`${certDir}/consumer.key`);
      const cert = fs.readFileSync(`${certDir}/consumer.crt`);
      const httpsOptions = {
        key,
        cert
      };

      https
        .createServer(httpsOptions, server)
        .listen(port, () => {
          logger.info(`App running in HTTPS mode on Port: ${port}`);
        })
        .on('error', err => {
          logger.info(`Error: ${err}`);
        });
    }
    else {
      server
        .listen(port, () => {
          logger.info(`App running in HTTP mode on Port:${port}`);
        })
        .on('error', err => {
          logger.info(`Error: ${err}`);
        });
    }
  })
  .catch((err) => console.error(err));

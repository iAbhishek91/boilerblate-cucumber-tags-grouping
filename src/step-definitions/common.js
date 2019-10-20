import { When } from 'cucumber';
import { logger } from 'optimus-automation';

const { plainLog: { log } } = logger;

When('I have something', () => {
  log.info('I have something');
});


When('I do something', () => {
  log.info('I do something');
});


When('I get something', () => {
  log.info('I get something');
});

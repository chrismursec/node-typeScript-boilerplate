import errorHandler from 'errorhandler';
import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler);
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(
      '  App is running at http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env'),
  );
  console.log('  Press CTRL-C to stop\n');
});



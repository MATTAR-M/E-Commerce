import { Global, Module } from '@nestjs/common';
import { createClient } from 'redis';
import{redisURL} from "../../config/config.services"
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: async () => {
        const redis = createClient({
          url: redisURL,
        });
        console.log('Redis Connected Succefully');
        await redis.connect();
        redis.on('error', (err) => {
          console.log('Redis Connected Error');
        });
        return redis;
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}

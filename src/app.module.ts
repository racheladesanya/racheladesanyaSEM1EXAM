import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryRachelModule } from './inventory-rachel/inventory-rachel.module';
import { InventoryModule } from './inventory/inventory.module';


@Module({
 
  controllers: [AppController],
  providers: [AppService],
  imports: [InventoryRachelModule, InventoryModule],
})
export class AppModule {}

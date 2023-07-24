import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  guest_id?: string;
  car_id?: string;
  booking_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  guest_id?: string;
  car_id?: string;
  status?: string;
}

import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  status: yup.string().required(),
  guest_id: yup.string().nullable(),
  car_id: yup.string().nullable(),
});

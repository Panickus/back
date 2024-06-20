export interface Order {
   id: string;
   userId: string;
   courseId: string;
   totalPrice: number;
   status: 'pending' | 'paid' | 'cancelled';
   createdAt: Date;
   updatedAt: Date;
 }
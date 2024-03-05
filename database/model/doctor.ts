import { Document, Schema, model, Model, Types } from "mongoose";
import { User } from "./user";

export type Appointment = {
  patientName: string;
  patientDetails: User;
  date: string;
  time: string;
  notes: string;
};

export type Doctor = {
  user: User;
  qualification: string;
  specialty: string;
  appointments: Appointment[];
  profile?: string;
  verificationToken?: string;
};

// Interface to model the User Schema.
export interface IDoctorDocument extends Doctor, Document {}

// Define the schema
const DoctorSchema = new Schema<IDoctorDocument>({
  user: { type: Types.ObjectId, ref: "User" },
  profile: { type: String, required: false },
  qualification: { type: String, required: true },
  specialty: { type: String, required: true },
  appointments: {
    type: [
      {
        patientName: { type: String, required: true },
        patientDetails: { type: Types.ObjectId, ref: "User" },
        date: { type: String, required: true },
        time: { type: String, required: true },
        notes: { type: String, required: true },
      },
    ],
    required: true,
    default: [],
  },
  verificationToken: { type: String, required: false },
});

// Using the singleton pattern to prevent model redefinition
let DoctorModel: Model<IDoctorDocument>;

try {
  // check model is already defined
  DoctorModel = model<IDoctorDocument>("Doctor");
} catch {
  // is not defined, define it
  DoctorModel = model<IDoctorDocument>("Doctor", DoctorSchema);
}

export { DoctorModel };

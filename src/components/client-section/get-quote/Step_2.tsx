import { Dispatch, SetStateAction } from "react";
import { Text } from "react-native-paper";

import { QuoteForm } from "../../../types/client";
import Service from "@/src/components/client-section/get-quote/step-2/Service";
import Commodity from "./step-2/Commodity";

type Props = {
  formData: QuoteForm;
  setFormData: Dispatch<SetStateAction<QuoteForm>>;
};

export default function Step_2({ formData, setFormData }: Props) {
  console.log("step_2.tsx", formData);
  return (
    <>
      <Commodity formData={formData} setFormData={setFormData} />
      <Service formData={formData} setFormData={setFormData} />
    </>
  );
}

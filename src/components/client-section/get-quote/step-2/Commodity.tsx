import { useState, Dispatch, SetStateAction } from "react";
import { FlatList, View } from "react-native";
import { Text, List, Checkbox } from "react-native-paper";

import {
  QuoteForm,
} from "../../../../types/client";

type Props = {
  formData: QuoteForm;
  setFormData: Dispatch<SetStateAction<QuoteForm>>;
};
export default function Commodity({formData, setFormData}: Props){
    return(
        <>
        <Text>HELLO</Text>
        </>
    )
}
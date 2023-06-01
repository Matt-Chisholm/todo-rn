import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  CalendarList,
  Calendar,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";

export default function Todos() {
  const [selected, setSelected] = useState("");

  const currentDate = new Date();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        style={{ height: 500, width: 500, borderWidth: 1, borderColor: "gray" }}
        current={currentDate}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
    </View>
  );
}

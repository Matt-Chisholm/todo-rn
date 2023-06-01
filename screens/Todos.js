import { View, Text, SafeAreaView } from "react-native";
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

  const events = {
    // Sample event for the selected date
    [selected]: [
      { name: "Meeting", time: "10:00 AM" },
      { name: "Lunch", time: "1:00 PM" },
      { name: "Workout", time: "5:00 PM" },
    ],
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        style={{ height: 330, width: 500, borderWidth: 1, borderColor: "gray" }}
        current={currentDate}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <Agenda
        selected={selected}
        style={{
          height: 500,
          width: 500,
        }}
        items={events}
        renderItem={(item) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 10,
                marginRight: 10,
                marginTop: 17,
              }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 15 }}>{item.time}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

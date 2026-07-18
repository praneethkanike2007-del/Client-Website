"use client";

import { CalendarDays, Clock3, Users, IndianRupee } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    {
      title: "Today's Appointments",
      value: "0",
      icon: CalendarDays,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Pending",
      value: "0",
      icon: Clock3,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Customers",
      value: "0",
      icon: Users,
      color: "bg-pink-100 text-pink-700",
    },
    {
      title: "Today's Revenue",
      value: "₹0",
      icon: IndianRupee,
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-7 shadow-lg"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-2xl p-4 ${card.color}`}
              >
                <Icon size={34} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
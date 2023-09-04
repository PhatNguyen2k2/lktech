import React from "react";
import Service from "@/components/Service/service";

export default function Maintenance() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Service type={"maintenance"} />
        </main>
    );
};
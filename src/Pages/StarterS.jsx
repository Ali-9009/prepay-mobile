import { ArrowRight, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

import {
    Smartphone,
    BadgeDollarSign,
    CreditCard,
    Zap,
    ShieldCheck,
    RadioTower,
    Headset,
} from "lucide-react";

const menuItems = [
    { label: "ACTIVATIONS", path: "/check-compatibility" },
    { label: "MOBILE TOP-UP", path: "/recharge" },
];

const services = [
    {
        title: "Activar un nuevo plan",
        description: "Activa tu línea en minutos con eSIM o SIM físico.",
        icon: Smartphone,
        to: "/check-compatibility",
        logos: [
            "/assets/att.png",
            "/assets/app-logo.png",
            "/assets/cricket.png",
        ],
    },
    {
        title: "Recargar tu teléfono",
        description: "Añade saldo a tu plan actual al instante.",
        icon: BadgeDollarSign,
        to: "/recharge",
        logos: [
            "/assets/simple-mobile.png",
            "/assets/Claro.png",
            "/assets/metro.png",
            "/assets/cubacel.png",
        ],
    },
    {
        title: "Compra tarjetas virtuales",
        description: "Compra tarjetas para tus servicios favoritos al instante.",
        icon: CreditCard,
        to: "/start-screen",
        logos: [
            "/assets/spotify.webp",
            "/assets/netflix.png",
            "/assets/hulu.webp",
        ],
    },
];


export default function StartS() {
    return (
        <main className="max-w-xl mx-auto relative h-dvh w-full overflow-hidden bg-white flex flex-col items-center">

            {/* Logo */}
            <div className="relative z-10 text-center mt-10">
                <p className="text-lg font-medium text-black">Welcome To</p>

                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="T Mobile"
                        className="mx-auto mt-3 w-44 h-auto"
                    />
                </Link>

            </div>

            {/* Buttons */}
            {/* <div className="relative z-10 mt-10 w-full max-w-75 px-4 flex flex-col gap-3">
                {menuItems.map((item) => (
                    <Link key={item.label} to={item.path} className="block">
                        <button className="w-full h-10 rounded-full bg-(--primary-color) hover:bg-black duration-300 text-white text-xs font-bold flex items-center justify-between px-5">
                            {item.label}
                            <span className="text-lg"><ArrowRight /></span>
                        </button>
                    </Link>
                ))}
            </div> */}

            <div className="mt-8 text-center mb-4">
                <p className="text-xl">Let's Check</p>
                <h2 className="text-2xl font-semibold leading-tight text-(--primary-color)">Your Device Compatibility</h2>
            </div>

            <section className="mt-4 space-y-3 z-9">
                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <Link
                            key={service.title}
                            to={service.to}
                            className="group grid min-h-29 grid-cols-[76px_1fr_45px] items-center rounded-2xl border border-gray-200 bg-white px-3 py-3 shadow-[0_5px_16px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="flex h-full items-center justify-center border-r border-gray-200 pr-3">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-b from-red-500 to-red-700 shadow-[0_5px_8px_rgba(185,0,0,0.25)]">
                                    <Icon
                                        strokeWidth={1.8}
                                        className="h-8 w-8 text-white"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="min-w-0 px-4">
                                <h2 className="text-[16px] font-bold text-gray-950">
                                    {service.title}
                                </h2>

                                <p className="mt-2 text-[11px] text-gray-600">
                                    {service.description}
                                </p>

                                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                    {service.logos.map((logo) => (
                                        <img
                                            key={logo}
                                            src={logo}
                                            alt=""
                                            className="max-h-8 max-w-16 object-contain"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex items-center justify-center">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition group-hover:translate-x-1 group-hover:bg-red-700">
                                    <ArrowRight
                                        strokeWidth={3}
                                        className="h-5 w-5"
                                    />
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </section>

            {/* Bottom Wave */}
            <img
                src="/assets/wave.png"
                alt=""
                className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
            />
        </main>
    );
}
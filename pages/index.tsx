import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BsGithub, BsLinkedin, BsTelegram, BsTwitter, BsWhatsapp, BsCalendar2 } from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai"

const inter = Inter({ subsets: ["latin"] });

const GITHUB_LINK = "https://github.com/0xmiyu"
const LINKEDIN_LINK = "https://www.linkedin.com/in/martinongyj/" 
const CAL_LINK = "https://cal.com/martin-zephyr"
const TWITTER_LINK = "https://twitter.com/0xmiyu"
const TELEGRAM_LINK = "https://t.me/miyu_sol"
const WHATSAPP_LINK = "https://wa.me/6597114549"
const EMAIL_LINK = "mailto:martin@zephyrlabs.ai"

export default function Home() {
    return (
        <div className="bg-gray-900 min-h-screen text-2xl">
            <Head>
                <title>Miyu&apos;s Links</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <header className="flex flex-col items-center text-white text-center">
                    <img
                        src="/Ghion.png"
                        className="w-36 rounded-full border-2 border-white mt-10"
                    />
                    <h1 className="inline-block pt-1 pb-5">hi, I&apos;m Martin</h1>
                </header>

                <div className="flex items-center justify-center text-white">
                    <ul className="font-mono text-xl table border-5 border-white w-7/12 text-center">
                        <li className="p-3 my-2 mx-4 bg-black rounded-lg hover:bg-gray-300 hover:text-black transition duration-265 ease-in-outa">
                            <div className="flex items-center">
                                <BsGithub className="ml-auto" />

                                <a
                                    href={GITHUB_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center"
                                >
                                    Github
                                </a>
                            </div>
                        </li>
                        <li className="p-3 mb-2 mx-4 bg-black rounded-lg hover:bg-gray-300 hover:text-black transition duration-265 ease-in-outa">
                            <div className="flex items-center">
                                <BsLinkedin className="ml-auto" />
                                <a
                                    href={LINKEDIN_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </li>
                        <li className="p-3 mb-2 mx-4 bg-black rounded-lg hover:bg-gray-300 hover:text-black transition duration-265 ease-in-outa">
                            <div className="flex items-center">
                                <BsCalendar2 className="ml-auto" />
                                <a
                                    href={CAL_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center"
                                >
                                    Book a Meeting!
                                </a>
                            </div>
                        </li>
                        {/* <li className="p-3 mb-4 mx-4 bg-black rounded-lg hover:bg-gray-300 hover:text-black">
                            <div className="flex items-center">
                                <BsTwitter className="ml-auto" />
                                <a
                                    href={TWITTER_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center"
                                >
                                    Twitter
                                </a>
                            </div>
                        </li> */}
                        <li className="p-3 mb-4 bg-gray-800 rounded-3xl hover:bg-gray-300 hover:text-black transition duration-265 ease-in-outa">
                            <div className="flex items-center">
                                <BsTelegram className="ml-4" />
                                <a
                                    href={TELEGRAM_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center"
                                >
                                    Telegram
                                </a>
                            </div>
                        </li>
                        <li className="p-3 mb-4 bg-gray-800 rounded-3xl hover:bg-gray-300 hover:text-black transition duration-265 ease-in-outa">
                            <div className="flex items-center">
                                <BsWhatsapp className="ml-4" />
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center"
                                >
                                    Whatsapp
                                </a>
                            </div>
                        </li>
                        <li className="p-3 mb-2 bg-gray-800 rounded-3xl hover:bg-gray-300 hover:text-black transition duration-265 ease-in-outa">
                            <div className="flex items-center">
                                <AiOutlineMail className="ml-4" />
                                <a
                                    href={EMAIL_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center"
                                >
                                    Email
                                </a>
                            </div>
                        </li>
                        {/*
                        <li className="p-2 mb-2 bg-black rounded-lg hover:bg-gray-300 hover:text-black">
                            <a
                                href="https://martinongyj.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Website
                            </a>
                        </li>
                        <li className="p-2 mb-2 bg-black rounded-lg hover:bg-gray-300 hover:text-black">
                            <a href="./images/Martin Ong's Resume.pdf" download>
                                Resume
                            </a>
                        </li>
                        */}
                    </ul>
                </div>
            </main>
        </div>
    );
}

import React, { useState, useRef } from 'react';
import Button from './Button.jsx';
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
    const [isAudioPlay, setIsAudioPlay] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const navContainerRef = useRef(null);
    const audioEleRef = useRef(null); 

    const toggleAudioIndicator = () => {
        const audio = audioEleRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play().catch(e => console.error("Play failed:", e));
            setIsAudioPlay(true);
            setIsIndicatorActive(true);
        } else {
            audio.pause();
            setIsAudioPlay(false);
            setIsIndicatorActive(false);
        }
    };

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-10" />
                        <Button
                            id="product-button"
                            title="products"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* <Button
                            className="ml-10 flex items-center space-x-0.5"
                            onClick={toggleAudioIndicator} // ✅ fixed function name
                        >
                            <audio
                                ref={audioEleRef}
                                src="/audio/loop.mp3"
                                loop
                                className="hidden"
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                    style={{ animationDelay: `${bar * 0.1}s` }}
                                />
                            ))}
                        </Button> */}
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;

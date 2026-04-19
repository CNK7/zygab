import React, { useEffect, useState } from "react";
import "./Gallery.css";

export type MediaItem = { id?: string | number; type: "image" | "video"; src: string; thumbnail?: string; alt?: string; };

type GalleryProps = { items: MediaItem[]; showCount?: number; className?: string; };

export default function Gallery({ items, showCount = 4, className = "" }: GalleryProps) { const [isOpen, setIsOpen] = useState(false); const [current, setCurrent] = useState(0);

    useEffect(() => { function onKey(e: KeyboardEvent) { if (!isOpen) return; if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); if (e.key === "Escape") close(); }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, current, items]);

    const openAt = (index: number) => { setCurrent(index); setIsOpen(true); document.body.style.overflow = "hidden"; };
    const close = () => { setIsOpen(false); document.body.style.overflow = ""; };
    const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

    const visible = items.slice(0, showCount);
    const remaining = Math.max(0, items.length - showCount);

    return (
        <div className={`cz-gallery ${className}`}> 
            <div className="cz-grid"> 
                {visible.map((it, idx) => (
                    <div key={it.id ?? idx} className="cz-thumb-wrapper"> 
                        <button className="cz-thumb" onClick={() => openAt(idx)} aria-label={`打开第 ${idx + 1} 项（${it.type === "video" ? "视频" : "图片"}）`} > 
                            {it.type === "image" ? ( 
                                <img src={it.thumbnail ?? it.src} alt={it.alt ?? `图片 ${idx + 1}`} /> 
                            ) : ( 
                                <div className="cz-video-thumb"> 
                                    <img src={it.thumbnail ?? it.src} alt={it.alt ?? `视频 ${idx + 1}`} /> 
                                    <div className="cz-play-icon">▶</div> 
                                </div> 
                            )}
                        </button> 
                        {idx === showCount - 1 && remaining > 0 && ( 
                            <button className="cz-more-overlay" onClick={() => openAt(idx)} aria-label={`还有 ${remaining} 项，点击查看`} > 
                                <span className="cz-more-text">还有 {remaining} 张</span> 
                            </button> 
                        )} 
                    </div> 
                ))} 
            </div> 
            {isOpen && ( 
                <div className="cz-modal" role="dialog" aria-modal="true" aria-label="图片查看器"> 
                    <button className="cz-close" onClick={close} aria-label="关闭">✕</button> 
                    <button className="cz-prev" onClick={prev} aria-label="上一张">‹</button> 
                    <button className="cz-next" onClick={next} aria-label="下一张">›</button> 
                    <div className="cz-viewer"> 
                        {items[current].type === "image" ? ( 
                            <img className="cz-full" src={items[current].src} alt={items[current].alt ?? `图片 ${current + 1}`} /> 
                        ) : ( 
                            <video className="cz-full" src={items[current].src} controls autoPlay > 
                                Your browser does not support the video tag. 
                            </video> 
                        )} 
                        <div className="cz-caption"> 
                            <span>{current + 1} / {items.length}</span> 
                            <span>{items[current].type === "video" ? "视频" : "图片"}</span> 
                        </div> 
                    </div> 
                </div> 
            )} 
        </div> 
    ); 
}
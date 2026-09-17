"use client";

import { useState, useCallback, useEffect } from "react";
import { listingData } from "./data/listing";
import Header from "./components/Header";
import PhotoGallery from "./components/PhotoGallery";
import ListingInfo from "./components/ListingInfo";
import BookingCard from "./components/BookingCard";
import HostInfo from "./components/HostInfo";
import Description from "./components/Description";
import SleepSection from "./components/SleepSection";
import Amenities from "./components/Amenities";
import Calendar from "./components/Calendar";
import Reviews from "./components/Reviews";
import LocationSection from "./components/LocationSection";
import MeetYourHost from "./components/MeetYourHost";
import ThingsToKnow from "./components/ThingsToKnow";
import MoreStaysNearby from "./components/MoreStaysNearby";
import StickyNav from "./components/StickyNav";
import PhotoTour, { ALL_PHOTO_TOUR_PHOTOS } from "./components/PhotoTour";
import Lightbox from "./components/Lightbox";

export default function Home() {
  const [showPhotoTour, setShowPhotoTour] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const openPhotoTour = useCallback(() => {
    setShowPhotoTour(true);
    document.body.style.overflow = "hidden";
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("modal", "PHOTO_TOUR_SCROLLABLE");
      window.history.pushState(null, "", url.toString());
    }
  }, []);

  const closePhotoTour = useCallback(() => {
    setShowPhotoTour(false);
    document.body.style.overflow = "";
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("modal");
      window.history.pushState(null, "", url.pathname + (url.search ? url.search : ""));
    }
  }, []);

  useEffect(() => {
    const checkModalParam = () => {
      if (typeof window === "undefined") return;
      const params = new URLSearchParams(window.location.search);
      if (params.get("modal") === "PHOTO_TOUR_SCROLLABLE") {
        setShowPhotoTour(true);
        document.body.style.overflow = "hidden";
      } else {
        setShowPhotoTour(false);
        document.body.style.overflow = "";
      }
    };

    checkModalParam();
    window.addEventListener("popstate", checkModalParam);
    return () => window.removeEventListener("popstate", checkModalParam);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < ALL_PHOTO_TOUR_PHOTOS.length - 1 ? prev + 1 : prev
    );
  }, []);

  const handleHeroPhotoClick = useCallback(() => {
    openPhotoTour();
  }, [openPhotoTour]);

  const handleShare = useCallback(() => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setShowShareToast(true);
    setTimeout(() => {
      setShowShareToast(false);
    }, 2800);
  }, []);

  const toggleSave = useCallback(() => {
    setIsSaved((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyNav price={listingData.price} rating={listingData.rating} reviewCount={listingData.reviewCount} />

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-8 pb-20 lg:pb-0">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 sm:mt-6 mb-4" id="photos">
          <h1 className="text-[20px] sm:text-[26px] font-semibold text-[var(--text-primary)] leading-tight">
            {listingData.title}
          </h1>
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm font-semibold underline hover:bg-gray-100 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              Share
            </button>
            <button
              onClick={toggleSave}
              className="flex items-center gap-2 text-sm font-semibold underline hover:bg-gray-100 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={isSaved ? "#FF385C" : "none"}
                stroke={isSaved ? "#FF385C" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-200 ${isSaved ? "scale-115 text-[#FF385C]" : ""}`}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>
        </div>

        
        <PhotoGallery
          heroImages={listingData.heroImages}
          onShowAllPhotos={openPhotoTour}
          onPhotoClick={handleHeroPhotoClick}
        />

        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
          
          <div className="flex-1 min-w-0">
            <ListingInfo
              title={listingData.title}
              fullLocation={listingData.fullLocation}
              guests={listingData.guests}
              bedrooms={listingData.bedrooms}
              beds={listingData.beds}
              bathrooms={listingData.bathrooms}
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
            />

            <HostInfo
              host={listingData.host}
              highlights={listingData.highlights}
            />

            <Description description={listingData.description} />

            <SleepSection arrangements={listingData.sleepArrangements} />

            <Amenities
              amenities={listingData.amenities}
              totalAmenities={listingData.totalAmenities}
            />

            <Calendar
              checkInDate={listingData.checkIn}
              checkOutDate={listingData.checkOut}
              location={listingData.location}
              nights={listingData.price.totalNights}
            />
          </div>

          
          <div className="w-[372px] shrink-0 hidden lg:block pt-8">
            <BookingCard
              price={listingData.price}
              checkIn={listingData.checkIn}
              checkOut={listingData.checkOut}
              defaultGuests={listingData.defaultGuests}
              freeCancellationDate={listingData.freeCancellationDate}
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
            />
          </div>
        </div>

        
        <Reviews
          rating={listingData.rating}
          reviewCount={listingData.reviewCount}
          ratingBreakdown={listingData.ratingBreakdown}
          reviewTags={listingData.reviewTags}
          reviews={listingData.reviews}
        />

        
        <LocationSection location={listingData.fullLocation} />

        
        <MeetYourHost />

        
        <ThingsToKnow />

        
        <MoreStaysNearby />
      </main>

      
      {showPhotoTour && (
        <PhotoTour
          onClose={closePhotoTour}
          onPhotoClick={openLightbox}
          isSaved={isSaved}
          onSave={toggleSave}
          onShare={handleShare}
        />
      )}

      
      {lightboxIndex !== null && (
        <Lightbox
          photos={ALL_PHOTO_TOUR_PHOTOS}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
      
      <div
        className={`fixed bottom-20 lg:bottom-12 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none ${
          showShareToast
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-95"
        }`}
      >
        <div className="bg-[#222222] text-white text-[13px] font-medium px-4 py-2.5 rounded-[8px] shadow-2xl tracking-wide flex items-center justify-center select-none">
          Share options
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[#EBEBEB] px-4 py-3 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div>
          <div className="text-[15px] leading-tight">
            <span className="font-bold text-[#222222]">{listingData.price.currency}{listingData.price.total.toLocaleString("en-IN")}</span>
            <span className="text-[#222222] text-xs font-normal"> / {listingData.price.totalNights} nights</span>
          </div>
          <div className="flex items-center gap-1 text-[12px] text-[#717171] mt-0.5">
            <span className="text-[#222222] font-semibold">★ {listingData.rating}</span>
            <span>· {listingData.reviewCount} reviews</span>
          </div>
        </div>
        <button className="px-6 py-2.5 sm:py-3 text-white font-semibold text-[14px] rounded-xl bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:brightness-95 active:scale-[0.98] transition-all shadow-sm cursor-pointer">
          Reserve
        </button>
      </div>
    </div>
  );
}

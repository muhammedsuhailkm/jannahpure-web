"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Phone,
  ChevronRight,
  X,
  CalendarDays,
  User,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { playfair } from "@/lib/fonts";

const WHATSAPP_NUMBER = "97455899831";
const PHONE_NUMBER = "+97455899831";

/* ── Helper: generate week dates starting from today ── */
function getWeekDates() {
  const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const dates: { day: string; date: number; month: string; full: Date }[] = [];
  const today = new Date();
  for (let i = 0; i < 5; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      day: days[d.getDay()],
      date: d.getDate(),
      month: months[d.getMonth()],
      full: d,
    });
  }
  return dates;
}

const SupportSection = () => {
  const weekDates = getWeekDates();
  const [selectedDate, setSelectedDate] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  /* ── Swipe-to-schedule logic ── */
  const swipeRef = useRef<HTMLDivElement>(null);
  const [swipeX, setSwipeX] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const startX = useRef(0);
  const trackWidth = useRef(0);

  useEffect(() => {
    if (swipeRef.current) {
      trackWidth.current = swipeRef.current.offsetWidth - 52;
    }
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX - swipeX;
    setSwiping(true);
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX - swipeX;
    setSwiping(true);
  };
  const handleMove = (clientX: number) => {
    if (!swiping) return;
    let newX = clientX - startX.current;
    if (newX < 0) newX = 0;
    if (newX > trackWidth.current) newX = trackWidth.current;
    setSwipeX(newX);
    if (newX >= trackWidth.current * 0.85) {
      setSwiping(false);
      setSwipeX(0);
      setShowModal(true);
    }
  };
  const handleEnd = () => {
    setSwiping(false);
    setSwipeX(0);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onUp = () => handleEnd();
    if (swiping) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiping]);

  /* ── Send via WhatsApp ── */
  const handleSendWhatsApp = () => {
    const sel = weekDates[selectedDate];
    const dateStr = `${sel.day}, ${sel.date} ${sel.month}`;
    const lines = [
      `📅 *Meeting Request*`,
      `Date: ${dateStr}`,
      formData.name ? `Name: ${formData.name}` : "",
      formData.phone ? `Phone: ${formData.phone}` : "",
      formData.email ? `Email: ${formData.email}` : "",
      formData.message ? `Message: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setShowDatePicker(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 2000);
  };

  const selectedDateObj = weekDates[selectedDate];

  return (
    <>
      <section className="support-section">
        <div className="support-section__inner">
          {/* ── Card 1: Get Support ── */}
          <div className="support-card support-card--cta">
            <h3 className={`support-card__heading ${playfair.className}`}>
              مستعجل؟ احصل على الدعم
              <br />
              فوراً!
            </h3>
            <p className="support-card__text">
              ليس لديك وقت؟ تواصل مع فريقنا مباشرة عبر الواتساب أو اتصل للحصول على دعم فوري. نحن هنا للإجابة على أسئلتك وإرشادك لتلبية احتياجاتك من أنظمة تنقية المياه بكفاءة.
            </p>
            <div className="support-card__buttons">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="support-btn support-btn--chat"
              >
                <MessageCircle className="support-btn__icon" />
                تحدث الآن
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="support-btn support-btn--call"
              >
                <Phone className="support-btn__icon" />
                اتصل الآن
              </a>
            </div>
          </div>

          {/* ── Card 3: Schedule Meeting ── */}
          <div className="support-card support-card--schedule">
            <p className="support-card__schedule-text">
              خطط لاجتماعك بكل سهولة. اختر التاريخ الذي يناسبك، وسنتأكد من جاهزية خبير لمساعدتك في احتياجاتك من أنظمة تنقية المياه في قطر.
            </p>

            {/* Date pills */}
            <div className="support-card__dates">
              {weekDates.map((d, i) => (
                <button
                  key={i}
                  className={`support-date-pill ${i === selectedDate ? "support-date-pill--active" : ""}`}
                  onClick={() => setSelectedDate(i)}
                >
                  <span className="support-date-pill__num">{d.date}</span>
                  <span className="support-date-pill__day">{d.day}</span>
                </button>
              ))}
            </div>

            {/* Swipe track */}
            <div className="support-swipe" ref={swipeRef}>
              <div
                className="support-swipe__thumb"
                style={{ transform: `translateX(${swipeX}px)` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <ChevronRight className="support-swipe__icon" />
              </div>
              <span className="support-swipe__label">
                اسحب لتحديد موعد اجتماع
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal: Schedule Meeting ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.25s ease" }}
          onClick={() => !submitted && setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl w-[480px] max-w-[92vw] max-h-[90vh] overflow-y-auto p-10 relative text-center shadow-2xl"
            style={{ animation: "slideUp 0.3s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-[#2563eb] mx-auto mb-4" />
                <h3
                  className={`text-xl font-bold text-[#1a1a1a] mb-2 ${playfair.className}`}
                >
                  Meeting Scheduled!
                </h3>
                <p className="text-[#888] text-sm">
                  تم إرسال طلبك عبر الواتساب.
                </p>
              </div>
            ) : (
              <>
                {/* Close */}
                <button
                  className="absolute top-5 right-5 text-[#666] hover:text-[#1a1a1a] transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  <X size={20} />
                </button>

                {/* Header icon */}
                <div className="w-14 h-14 rounded-[14px] bg-[#1e3a8a] text-white flex items-center justify-center mx-auto mb-5">
                  <CalendarDays size={28} />
                </div>

                <h3
                  className={`text-2xl font-bold text-[#1a1a1a] mb-1 ${playfair.className}`}
                >
                  تحديد موعد اجتماع
                </h3>
                <p className="text-sm text-[#999] mb-7">
                  دعنا نخطط لنقاشك القادم
                </p>

                {/* Selected Date Card */}
                <div className="flex items-center justify-between px-5 py-4 border-[1.5px] border-[#bfdbfe] rounded-xl bg-[#eff6ff] mb-6 text-left">
                  <div className="flex items-center gap-3.5">
                    <CalendarDays
                      size={20}
                      className="text-[#1e3a8a] shrink-0"
                    />
                    <div>
                      <span className="block text-xs text-[#999] mb-0.5">
                        التاريخ المحدد
                      </span>
                      <span className="block text-base font-bold text-[#1a1a1a]">
                        {selectedDateObj.day}، {selectedDateObj.date}{" "}
                        {selectedDateObj.month}
                      </span>
                    </div>
                  </div>
                  <button
                    className="border-[1.5px] border-[#d4d4d4] rounded-lg px-4 py-1.5 text-[13px] font-semibold text-[#1a1a1a] hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-all bg-transparent"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                  >
                    تغيير
                  </button>
                </div>

                {/* Date picker (expandable) */}
                {showDatePicker && (
                  <div
                    className="flex gap-2 mb-5"
                    style={{ animation: "fadeIn 0.2s ease" }}
                  >
                    {weekDates.map((d, i) => (
                      <button
                        key={i}
                        className={`flex-1 flex flex-col items-center py-2.5 px-2 rounded-xl border-2 cursor-pointer transition-all ${
                          i === selectedDate
                            ? "bg-[#1e3a8a] border-[#1e3a8a]"
                            : "bg-[#f5f5f5] border-transparent hover:border-[#c9a85c]"
                        }`}
                        onClick={() => {
                          setSelectedDate(i);
                          setShowDatePicker(false);
                        }}
                      >
                        <span
                          className={`text-lg font-bold ${i === selectedDate ? "text-white" : "text-[#1a1a1a]"}`}
                        >
                          {d.date}
                        </span>
                        <span
                          className={`text-[10px] uppercase ${i === selectedDate ? "text-white" : "text-[#888]"}`}
                        >
                          {d.day}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Form */}
                <div className="flex flex-col gap-3.5 mb-6 text-left">
                  {/* Name */}
                  <div className="flex items-center gap-3 border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3.5 focus-within:border-[#1e3a8a] transition-colors bg-white">
                    <User size={18} className="text-[#bbb] shrink-0" />
                    <input
                      type="text"
                      placeholder="اسمك"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-none outline-none text-sm text-[#1a1a1a] w-full bg-transparent placeholder:text-[#bbb]"
                    />
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="flex items-center gap-3 border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3.5 focus-within:border-[#1e3a8a] transition-colors bg-white">
                      <Phone size={18} className="text-[#bbb] shrink-0" />
                      <input
                        type="tel"
                        placeholder="رقم الهاتف"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="border-none outline-none text-sm text-[#1a1a1a] w-full bg-transparent placeholder:text-[#bbb]"
                      />
                    </div>
                    <div className="flex items-center gap-3 border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3.5 focus-within:border-[#1e3a8a] transition-colors bg-white">
                      <Mail size={18} className="text-[#bbb] shrink-0" />
                      <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="border-none outline-none text-sm text-[#1a1a1a] w-full bg-transparent placeholder:text-[#bbb]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex items-start gap-3 border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3.5 focus-within:border-[#1e3a8a] transition-colors bg-white">
                    <MessageSquare
                      size={18}
                      className="text-[#bbb] shrink-0 mt-0.5"
                    />
                    <textarea
                      placeholder="رسالتك أو أجندة الاجتماع..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-none outline-none text-sm text-[#1a1a1a] w-full bg-transparent resize-none font-[inherit] placeholder:text-[#bbb]"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  className="w-full py-4 rounded-[14px] bg-[#1e3a8a] text-white text-base font-semibold flex items-center justify-center gap-2.5 cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed border-none"
                  onClick={handleSendWhatsApp}
                  disabled={!formData.name}
                >
                  <Send size={18} />
                  إرسال عبر الواتساب
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SupportSection;

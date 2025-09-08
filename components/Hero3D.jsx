"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";

function Ribbon() {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh>
        <torusKnotGeometry args={[1.2, 0.35, 220, 30]} />
        <meshStandardMaterial color="#ec4899" metalness={0.2} roughness={0.1} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <section className="relative">
      <div className="container py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <span className="badge">کالکشن ۲۰۲۵</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mt-4">
            تجربه‌ی <span className="text-brand-600">لاکچری</span> در خرید پوشاک
          </h1>
          <p className="mt-4 text-gray-600 leading-8">
            جدیدترین شال‌ها، لباس‌های مجلسی و روزمره با کیفیت ممتاز. ارسال سریع، بسته‌بندی شیک،
            و پشتیبانی واقعی.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#products">مشاهده محصولات</a>
            <a className="btn card" href="/dashboard">داشبورد مشتری</a>
          </div>
        </div>
        <div className="h-[360px] md:h-[460px] order-1 md:order-2 card overflow-hidden">
          <Canvas camera={{ position: [3, 2, 4], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 2]} intensity={1.2} />
            <Ribbon />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container"
      >
      </motion.div>
    </section>
  );
}

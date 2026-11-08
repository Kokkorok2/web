import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import { ViteEjsPlugin } from "vite-plugin-ejs";


const db = JSON.parse(readFileSync(resolve("api/db.json"), "utf-8"));

const formatCount = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n));

const categories = db.t5_categories;
const instructors = db.t5_instructors;
const courses = db.t5_courses.map((course) => ({
  ...course,
  category: categories.find((c) => c.id === course.categoryId),
  instructor: instructors.find((i) => i.id === course.instructorId),
  ratingLabel: formatCount(course.ratingCount),
  reviews: db.t5_reviews.filter((r) => r.courseId === course.id)
}));

const pages = ["index", "courses", "course-details", "enrollment"];

export default defineConfig({
  base: "./",
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  plugins: [
    ViteEjsPlugin({
      site: { name: "ITCourses", email: "support@itcourses.example" },
      categories,
      instructors,
      courses
    })
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p, resolve(`${p}.html`)]))
    }
  }
});

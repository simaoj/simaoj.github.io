import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blog");

export function getPostSlugs(locale: string = "pt") {
  const postsDirectory = path.join(contentDirectory, locale);
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, locale: string = "pt") {
  const realSlug = slug.replace(/\.md$/, "");
  const postsDirectory = path.join(contentDirectory, locale);
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  
  // O matter separa os metadados do conteúdo em si
  const { data, content } = matter(fileContents);

  return { 
    slug: realSlug, 
    meta: data, 
    content 
  };
}

function getPostTimestamp(dateValue: unknown, slug: string) {
  if (dateValue instanceof Date) {
    return dateValue.getTime();
  }

  if (typeof dateValue === "string") {
    const normalizedDate = dateValue.trim();

    const parsed = Date.parse(normalizedDate);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }

    const legacyMatch = normalizedDate.match(/^(\d{4}-\d{2}-\d{2})\s+([+-]\d{4})$/);
    if (legacyMatch) {
      const legacyParsed = Date.parse(`${legacyMatch[1]}T00:00:00${legacyMatch[2]}`);
      if (!Number.isNaN(legacyParsed)) {
        return legacyParsed;
      }
    }
  }

  const slugDateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  if (slugDateMatch) {
    const slugParsed = Date.parse(slugDateMatch[1]);
    if (!Number.isNaN(slugParsed)) {
      return slugParsed;
    }
  }

  return 0;
}

export function getAllPosts(locale: string = "pt") {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .sort((post1, post2) => getPostTimestamp(post2.meta.date, post2.slug) - getPostTimestamp(post1.meta.date, post1.slug));
  
  return posts;
}
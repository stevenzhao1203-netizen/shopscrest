"use client";

import type { ProductReview } from "../../../data/promotions";

const categoryReviewNotes: Record<
  ProductReview["category"],
  {
    fit: string;
    checks: string[];
    useCases: string;
  }
> = {
  electronics: {
    fit:
      "Electronics purchases are easiest to compare when the daily routine is clear first. Think about the devices already in use, where the product will sit or travel, how often it needs to be charged, and whether the brand's app, warranty, cables, or replacement parts fit your setup.",
    checks: [
      "Confirm device compatibility, charging or connection requirements, and included accessories.",
      "Review battery life, warranty coverage, return terms, and whether the product needs an app account.",
      "Check size, weight, ports, controls, and support availability before leaving the merchant page."
    ],
    useCases:
      "For desk-heavy days, the strongest choice is the one that saves time during repeated calls, charging, switching, or setup. For travel, durability, charging speed, and bag space matter more. For shared homes, easy pairing, clear controls, and simple maintenance can be more useful than a long list of advanced features."
  },
  apparel: {
    fit:
      "Apparel choices depend on fit, fabric, care requirements, and how often the item will actually be worn. A useful product page should help the reader decide whether the piece belongs in a daily wardrobe, a travel bag, a workout routine, or a more occasional outfit.",
    checks: [
      "Compare size charts, garment measurements, fabric content, stretch, and care instructions.",
      "Review return windows, color availability, seasonal weight, and whether the item layers well.",
      "Look for user photos or brand fit notes when choosing between two sizes."
    ],
    useCases:
      "For everyday wear, comfort and easy washing usually matter more than a dramatic feature list. For travel, wrinkle resistance, packability, and outfit flexibility become more important. For athletic or office use, the key question is whether the item still feels appropriate after several hours of movement."
  },
  skincare: {
    fit:
      "Skincare products should be judged by skin type, ingredient tolerance, texture, and where the product fits in a routine. A simple cleanser, serum, or moisturizer can be useful, but it still needs to match the reader's sensitivity level and existing products.",
    checks: [
      "Review the ingredient list, fragrance status, texture, and recommended use frequency.",
      "Check whether the product is better for dry, oily, combination, sensitive, or blemish-prone skin.",
      "Patch test when appropriate and verify merchant return rules for opened personal-care products."
    ],
    useCases:
      "In a daytime routine, lighter textures are usually easier to layer under sunscreen or makeup. Evening routines can support richer creams or targeted serums. Readers with sensitive skin should be cautious about stacking several new active ingredients at once, even when each individual product has strong reviews."
  },
  home: {
    fit:
      "Home products should solve a specific space problem rather than simply look good in a product photo. Before buying, it helps to measure the room, check outlets or storage space, and decide whether the item will be used daily or only occasionally.",
    checks: [
      "Measure available space and compare it with product dimensions, cord length, and clearance needs.",
      "Review setup requirements, replacement parts, filters, bulbs, or cleaning steps.",
      "Check warranty terms, delivery details, assembly needs, and return shipping responsibilities."
    ],
    useCases:
      "For small apartments, compact storage and quiet operation can matter more than maximum capacity. For family spaces, durability and easy cleaning often matter most. For smart-home products, confirm whether the device works with the reader's phone, router, voice assistant, and existing lighting or appliance setup."
  },
  travel: {
    fit:
      "Travel gear should match the kind of trip being planned. A suitcase, duffel, or backpack can all be useful, but each one makes different trade-offs around structure, flexibility, carry comfort, airline limits, and how quickly items can be accessed in transit.",
    checks: [
      "Compare dimensions, packed weight, airline limits, handle comfort, and compartment layout.",
      "Review materials, wheel or strap design, warranty coverage, and cleaning instructions.",
      "Think through whether the bag works for flights, road trips, outdoor weekends, or mixed work travel."
    ],
    useCases:
      "For short flights, wheels and a structured interior can make packing easier. For road trips or outdoor weekends, soft bags may be easier to load into tight spaces. For tech-heavy travel, laptop access, charger storage, and document organization can matter as much as total capacity."
  }
};

type ProductFitNotesProps = {
  category: ProductReview["category"];
};

export default function ProductFitNotes({ category }: ProductFitNotesProps) {
  const reviewNotes = categoryReviewNotes[category];

  return (
    <>
      <section className="review-section">
        <h2>Who it is best for</h2>
        <p>{reviewNotes.fit}</p>
        <p>{reviewNotes.useCases}</p>
      </section>

      <section className="review-section">
        <h2>Details to check before buying</h2>
        <ul className="review-checklist">
          {reviewNotes.checks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

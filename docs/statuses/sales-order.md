---
sidebar_position: 2
---

# สถานะคำสั่งซื้อ

เพื่อให้การสื่อสารระหว่างระบบและทีมพัฒนามีความชัดเจน การกำหนด **“สถานะคำสั่งซื้อมาตรฐาน”** จึงเป็นสิ่งจำเป็น เพื่อใช้เป็นจุดอ้างอิงกลางสำหรับทุกระบบที่เกี่ยวข้อง โดยแต่ละช่องทาง (เช่น เว็บไซต์, แอป, หรือช่องทางภายนอก) ควรแมปสถานะของตนเองให้สัมพันธ์กับสถานะมาตรฐานนี้ เพื่อให้เกิดความเข้าใจตรงกันทั้งในเชิงระบบและธุรกิจ

:::caution

สถานะของระบบภายนอกหรือแพลตฟอร์มอื่น ๆ อาจมีการเปลี่ยนแปลง หรืออาจไม่ตรงตามที่ระบุไว้ในเอกสารนี้ทั้งหมด  
จึงควรมีการ **ตรวจสอบและยืนยันกับระบบต้นทาง** เสมอ ก่อนนำไปใช้งานจริง หรือเชื่อมโยงสถานะเข้ากับระบบภายใน

:::

## กฏเบื้องต้น {#rules}

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## สถานะคำสั่งซื้อมาตรฐาน {#standard}

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## สถานะคำสั่งซื้อ Tiktok Shop {#tiktokshop}

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## สถานะคำสั่งซื้อ Lazada {#lazada}

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## สถานะคำสั่งซื้อ Shopee {#shopee}

ดูรายละเอียดเพิ่มเติมได้ที่ [Shopee Order Status Documentation](https://your-docs-site.com/docs/module-process/order-process/shopee)

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```

## สถานะคำสั่งซื้อ LineShoping {#lineshoping}

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```

## สถานะคำสั่งซื้อ Magento2 {#magento2}

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```

## สถานะคำสั่งซื้อ WooCommerce {#woocommerce}

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```
#!/usr/bin/env python3
import os
import sys
from PIL import Image

DRIVE_DIR = 'scripts/drive_images'
PUBLIC_DIR = 'public/images'

# Crop helper:
# anchor: (x_fraction, y_fraction) for center of crop, e.g. (0.5, 0.3) for face towards top
def smart_crop_resize(img_path, target_w, target_h, anchor=(0.5, 0.4), quality=87):
    with Image.open(img_path) as im:
        im = im.convert('RGB')
        orig_w, orig_h = im.size
        
        target_aspect = target_w / target_h
        orig_aspect = orig_w / orig_h
        
        if orig_aspect > target_aspect:
            # Image is wider than needed: crop sides
            new_w = int(orig_h * target_aspect)
            new_h = orig_h
            center_x = int(orig_w * anchor[0])
            left = max(0, min(orig_w - new_w, center_x - new_w // 2))
            top = 0
            right = left + new_w
            bottom = orig_h
        else:
            # Image is taller than needed: crop top/bottom
            new_w = orig_w
            new_h = int(orig_w / target_aspect)
            center_y = int(orig_h * anchor[1])
            left = 0
            top = max(0, min(orig_h - new_h, center_y - new_h // 2))
            right = orig_w
            bottom = top + new_h
            
        cropped = im.crop((left, top, right, bottom))
        resized = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
        return resized

TASKS = [
    # ABOUT
    {
        'src': 'IMG_4734_1.JPG',
        'dest': 'public/images/about/hero-cris.jpg',
        'w': 1200, 'h': 800, 'anchor': (0.5, 0.36)
    },
    {
        'src': 'IMG_4734_1.JPG',
        'dest': 'public/images/about/founder-portrait.jpg',
        'w': 800, 'h': 1100, 'anchor': (0.5, 0.40)
    },
    {
        'src': '001_Cris',
        'dest': 'public/images/about/founder-camera-bw.jpg',
        'w': 800, 'h': 800, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'IMG_0850.JPEG',
        'dest': 'public/images/about/founder-neon.jpg',
        'w': 800, 'h': 600, 'anchor': (0.5, 0.45)
    },
    {
        'src': 'IMG_7238.jpg',
        'dest': 'public/images/about/mission-studio.jpg',
        'w': 900, 'h': 900, 'anchor': (0.5, 0.5)
    },
    {
        'src': '002_sheyla_',
        'dest': 'public/images/about/gallery-1.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A0651-color-.jpg',
        'dest': 'public/images/about/gallery-2.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'IMG_4701.JPG',
        'dest': 'public/images/about/gallery-3.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.42)
    },
    {
        'src': 'IMG_8052.JPG',
        'dest': 'public/images/about/gallery-4.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A0368-color-_2.jpg',
        'dest': 'public/images/about/gallery-5.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A7763.jpg',
        'dest': 'public/images/about/gallery-6.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.38)
    },

    # BEAUTY
    {
        'src': 'Facetune_02-07-2023-22-52-41.jpg',
        'dest': 'public/images/beauty/hero-portrait.jpg',
        'w': 1200, 'h': 800, 'anchor': (0.5, 0.45)
    },
    {
        'src': 'IMG_2561.JPG',
        'dest': 'public/images/beauty/panel-lashes.jpg',
        'w': 800, 'h': 900, 'anchor': (0.5, 0.45)
    },
    {
        'src': 'IMG_0292.JPG',
        'dest': 'public/images/beauty/lash-classic.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.3)
    },
    {
        'src': 'Facetune_25-05-2023-17-55-17_1.jpg',
        'dest': 'public/images/beauty/lash-hybrid.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.4)
    },
    {
        'src': 'Facetune_31-05-2023-07-31-15.jpg',
        'dest': 'public/images/beauty/lash-volume.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'IMG_0477.JPG',
        'dest': 'public/images/beauty/lash-mega.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.3)
    },
    {
        'src': 'IMG_8429.JPG',
        'dest': 'public/images/beauty/lash-lift.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.3)
    },
    {
        'src': '03',
        'dest': 'public/images/beauty/panel-brows.jpg',
        'w': 800, 'h': 900, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'IMG_8430.JPG',
        'dest': 'public/images/beauty/brow-lamination.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.3)
    },
    {
        'src': 'IMG_1218.JPG',
        'dest': 'public/images/beauty/brow-tint.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.3)
    },
    {
        'src': 'IMG_0293_1.JPG',
        'dest': 'public/images/beauty/brow-wax.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.3)
    },
    {
        'src': 'IMG_4701.JPG',
        'dest': 'public/images/beauty/panel-hair.jpg',
        'w': 800, 'h': 900, 'anchor': (0.5, 0.42)
    },
    {
        'src': 'IMG_0397.jpg',
        'dest': 'public/images/beauty/hair-blowout.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.45)
    },
    {
        'src': 'MB1A6860.jpg',
        'dest': 'public/images/beauty/hair-updo.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'IMG_8961.JPG',
        'dest': 'public/images/beauty/panel-makeup.jpg',
        'w': 800, 'h': 900, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A5795.jpg',
        'dest': 'public/images/beauty/makeup-nomakeup.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.32)
    },
    {
        'src': 'IMG_8963_1.JPG',
        'dest': 'public/images/beauty/makeup-glam.jpg',
        'w': 600, 'h': 400, 'anchor': (0.5, 0.4)
    },
    {
        'src': 'MB1A0700-color-_2.jpg',
        'dest': 'public/images/beauty/glam-band-bg.jpg',
        'w': 1400, 'h': 500, 'anchor': (0.5, 0.3)
    },

    # CLASSES
    {
        'src': 'MB1A6052.jpg',
        'dest': 'public/images/classes/hero-vanity.jpg',
        'w': 1200, 'h': 800, 'anchor': (0.5, 0.4)
    },
    {
        'src': 'IMG_2561.JPG',
        'dest': 'public/images/classes/card-selfmakeup.jpg',
        'w': 800, 'h': 600, 'anchor': (0.5, 0.45)
    },
    {
        'src': 'MB1A5879.jpg',
        'dest': 'public/images/classes/card-private.jpg',
        'w': 800, 'h': 600, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A6052.jpg',
        'dest': 'public/images/classes/card-group.jpg',
        'w': 800, 'h': 600, 'anchor': (0.5, 0.4)
    },
    {
        'src': '7911ABB3-C403-4999-851C-03249D36C7BF_1_105_c.jpeg',
        'dest': 'public/images/classes/card-workshops.jpg',
        'w': 800, 'h': 600, 'anchor': (0.5, 0.3)
    },
    {
        'src': '7911ABB3-C403-4999-851C-03249D36C7BF_1_105_c.jpeg',
        'dest': 'public/images/classes/experience-vanity.jpg',
        'w': 900, 'h': 600, 'anchor': (0.5, 0.3)
    },
    {
        'src': 'IMG_0849.JPEG',
        'dest': 'public/images/classes/classes-cta.jpg',
        'w': 1400, 'h': 500, 'anchor': (0.5, 0.38)
    },
    {
        'src': 'MB1A5957.jpg',
        'dest': 'public/images/classes/avatar-maria.jpg',
        'w': 300, 'h': 300, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A7751.jpg',
        'dest': 'public/images/classes/avatar-daniela.jpg',
        'w': 300, 'h': 300, 'anchor': (0.5, 0.32)
    },
    {
        'src': 'makeup',
        'dest': 'public/images/classes/avatar-jessica.jpg',
        'w': 300, 'h': 300, 'anchor': (0.5, 0.35)
    },

    # CONTACT
    {
        'src': 'IMG_7238.jpg',
        'dest': 'public/images/contact/hero-reception.jpg',
        'w': 1200, 'h': 800, 'anchor': (0.5, 0.5)
    },
    {
        'src': 'IMG_7211.jpg',
        'dest': 'public/images/contact/lounge-chair.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.5)
    },

    # PHOTOGRAPHY
    {
        'src': 'MB1A0618-color-.jpg',
        'dest': 'public/images/photography/hero-photography.jpg',
        'w': 1200, 'h': 800, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A7751.jpg',
        'dest': 'public/images/photography/session-branding.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'MB1A0651-color-.jpg',
        'dest': 'public/images/photography/session-glamour.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.35)
    },
    {
        'src': 'IMG_8052.JPG',
        'dest': 'public/images/photography/session-bridal.jpg',
        'w': 800, 'h': 1000, 'anchor': (0.5, 0.35)
    },
]

def main():
    os.makedirs('public/images/photography', exist_ok=True)
    count = 0
    for task in TASKS:
        src_path = os.path.join(DRIVE_DIR, task['src'])
        dest_path = task['dest']
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        
        try:
            img = smart_crop_resize(src_path, task['w'], task['h'], anchor=task['anchor'])
            img.save(dest_path, 'JPEG', quality=87, optimize=True, progressive=True)
            size_kb = os.path.getsize(dest_path) / 1024
            print(f"[{count+1:02d}/{len(TASKS):02d}] {task['src']} -> {dest_path} ({task['w']}x{task['h']}, {size_kb:.1f} KB)")
            count += 1
        except Exception as e:
            print(f"ERROR on {task['src']}: {e}")
            
    print(f"\nDone! Successfully processed and distributed {count} images.")

if __name__ == '__main__':
    main()

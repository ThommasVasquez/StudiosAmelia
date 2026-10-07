import os
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REF_DIR = os.path.join(BASE_DIR, 'reference')
OUT_DIR = os.path.join(BASE_DIR, 'public', 'images')

os.makedirs(os.path.join(OUT_DIR, 'about'), exist_ok=True)
os.makedirs(os.path.join(OUT_DIR, 'beauty'), exist_ok=True)
os.makedirs(os.path.join(OUT_DIR, 'classes'), exist_ok=True)
os.makedirs(os.path.join(OUT_DIR, 'contact'), exist_ok=True)
os.makedirs(os.path.join(OUT_DIR, 'shared'), exist_ok=True)

# 1. ABOUT
about_img = Image.open(os.path.join(REF_DIR, 'about.png'))
# A1 Hero
about_img.crop((420, 62, 1024, 447)).save(os.path.join(OUT_DIR, 'about', 'hero-cris.jpg'), quality=95)
# A2 Founder
about_img.crop((30, 468, 214, 658)).save(os.path.join(OUT_DIR, 'about', 'founder-camera-bw.jpg'), quality=95)
about_img.crop((30, 665, 214, 781)).save(os.path.join(OUT_DIR, 'about', 'founder-neon.jpg'), quality=95)
about_img.crop((221, 468, 402, 781)).save(os.path.join(OUT_DIR, 'about', 'founder-portrait.jpg'), quality=95)
# A4 Mission center
about_img.crop((486, 908, 749, 1173)).save(os.path.join(OUT_DIR, 'about', 'mission-studio.jpg'), quality=95)
# A5 Gallery 6 tiles
about_img.crop((0, 1173, 149, 1353)).save(os.path.join(OUT_DIR, 'about', 'gallery-1.jpg'), quality=95)
about_img.crop((155, 1173, 333, 1353)).save(os.path.join(OUT_DIR, 'about', 'gallery-2.jpg'), quality=95)
about_img.crop((340, 1173, 482, 1353)).save(os.path.join(OUT_DIR, 'about', 'gallery-3.jpg'), quality=95)
about_img.crop((482, 1173, 623, 1353)).save(os.path.join(OUT_DIR, 'about', 'gallery-4.jpg'), quality=95)
about_img.crop((630, 1173, 793, 1353)).save(os.path.join(OUT_DIR, 'about', 'gallery-5.jpg'), quality=95)
about_img.crop((800, 1173, 1024, 1353)).save(os.path.join(OUT_DIR, 'about', 'gallery-6.jpg'), quality=95)
# A6 Dunes CTA
about_img.crop((0, 1353, 1024, 1536)).save(os.path.join(OUT_DIR, 'shared', 'dunes-cta.jpg'), quality=95)

# 2. CONTACT
contact_img = Image.open(os.path.join(REF_DIR, 'contact.png'))
# C1 Hero reception
contact_img.crop((380, 62, 1024, 397)).save(os.path.join(OUT_DIR, 'contact', 'hero-reception.jpg'), quality=95)
# C2 Boucle chair
contact_img.crop((737, 410, 1024, 910)).save(os.path.join(OUT_DIR, 'contact', 'lounge-chair.jpg'), quality=95)
# C3 Map
contact_img.crop((50, 1012, 478, 1251)).save(os.path.join(OUT_DIR, 'contact', 'map.jpg'), quality=95)

# 3. BEAUTY
beauty_img = Image.open(os.path.join(REF_DIR, 'beauty.png'))
# B1 Hero
beauty_img.crop((480, 50, 1024, 365)).save(os.path.join(OUT_DIR, 'beauty', 'hero-portrait.jpg'), quality=95)
# B2 Lashes panel
beauty_img.crop((0, 373, 240, 632)).save(os.path.join(OUT_DIR, 'beauty', 'panel-lashes.jpg'), quality=95)
# B2 5 Cards
beauty_img.crop((257, 424, 398, 505)).save(os.path.join(OUT_DIR, 'beauty', 'lash-classic.jpg'), quality=95)
beauty_img.crop((406, 424, 547, 505)).save(os.path.join(OUT_DIR, 'beauty', 'lash-hybrid.jpg'), quality=95)
beauty_img.crop((555, 424, 696, 505)).save(os.path.join(OUT_DIR, 'beauty', 'lash-volume.jpg'), quality=95)
beauty_img.crop((708, 424, 849, 505)).save(os.path.join(OUT_DIR, 'beauty', 'lash-mega.jpg'), quality=95)
beauty_img.crop((862, 424, 1003, 505)).save(os.path.join(OUT_DIR, 'beauty', 'lash-lift.jpg'), quality=95)
# B3 Brows panel
beauty_img.crop((0, 642, 240, 877)).save(os.path.join(OUT_DIR, 'beauty', 'panel-brows.jpg'), quality=95)
# B3 3 Cards
beauty_img.crop((258, 699, 446, 764)).save(os.path.join(OUT_DIR, 'beauty', 'brow-lamination.jpg'), quality=95)
beauty_img.crop((462, 699, 650, 764)).save(os.path.join(OUT_DIR, 'beauty', 'brow-tint.jpg'), quality=95)
beauty_img.crop((665, 699, 853, 764)).save(os.path.join(OUT_DIR, 'beauty', 'brow-wax.jpg'), quality=95)
# B4 Hair panel
beauty_img.crop((0, 885, 240, 1090)).save(os.path.join(OUT_DIR, 'beauty', 'panel-hair.jpg'), quality=95)
beauty_img.crop((258, 945, 404, 1045)).save(os.path.join(OUT_DIR, 'beauty', 'hair-blowout.jpg'), quality=95)
beauty_img.crop((608, 945, 770, 1045)).save(os.path.join(OUT_DIR, 'beauty', 'hair-updo.jpg'), quality=95)
# B5 Makeup panel
beauty_img.crop((0, 1095, 240, 1302)).save(os.path.join(OUT_DIR, 'beauty', 'panel-makeup.jpg'), quality=95)
beauty_img.crop((258, 1150, 404, 1250)).save(os.path.join(OUT_DIR, 'beauty', 'makeup-nomakeup.jpg'), quality=95)
beauty_img.crop((608, 1150, 770, 1250)).save(os.path.join(OUT_DIR, 'beauty', 'makeup-glam.jpg'), quality=95)
# B6 GlamBand
beauty_img.crop((0, 1304, 1024, 1452)).save(os.path.join(OUT_DIR, 'beauty', 'glam-band-bg.jpg'), quality=95)

# 4. CLASSES
classes_img = Image.open(os.path.join(REF_DIR, 'classes.png'))
# K1 Hero
classes_img.crop((380, 60, 1024, 480)).save(os.path.join(OUT_DIR, 'classes', 'hero-vanity.jpg'), quality=95)
# K2 4 Cards
classes_img.crop((28, 547, 262, 723)).save(os.path.join(OUT_DIR, 'classes', 'card-selfmakeup.jpg'), quality=95)
classes_img.crop((275, 547, 509, 723)).save(os.path.join(OUT_DIR, 'classes', 'card-private.jpg'), quality=95)
classes_img.crop((520, 547, 754, 723)).save(os.path.join(OUT_DIR, 'classes', 'card-group.jpg'), quality=95)
classes_img.crop((765, 547, 999, 723)).save(os.path.join(OUT_DIR, 'classes', 'card-workshops.jpg'), quality=95)
# K3 Experience
classes_img.crop((0, 897, 452, 1158)).save(os.path.join(OUT_DIR, 'classes', 'experience-vanity.jpg'), quality=95)
# K4 Avatars (3 circles)
classes_img.crop((32, 1195, 102, 1265)).save(os.path.join(OUT_DIR, 'classes', 'avatar-maria.jpg'), quality=95)
classes_img.crop((360, 1195, 430, 1265)).save(os.path.join(OUT_DIR, 'classes', 'avatar-daniela.jpg'), quality=95)
classes_img.crop((686, 1195, 756, 1265)).save(os.path.join(OUT_DIR, 'classes', 'avatar-jessica.jpg'), quality=95)
# K5 CTA
classes_img.crop((0, 1350, 1024, 1536)).save(os.path.join(OUT_DIR, 'classes', 'classes-cta.jpg'), quality=95)

print("All mockup images successfully extracted into public/images/!")

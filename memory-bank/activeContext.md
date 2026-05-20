# Active Context - Current State

## 최근 완료된 작업 (2026-05-17)

### 메뉴 페이지 - 피자 카테고리 재구성
- **파일**: `app/menu/page.tsx`, `contexts/LanguageContext.tsx`
- **클래식 피자 → 시그니처 피자로 이동**:
  - Hawaiian (`menu.item.hawaiian`)
  - Godfather (`menu.item.godfather`)
- **시그니처 피자 → 클래식 피자로 이동**:
  - White Pie (`menu.item.white.pie`) — Margherita 다음에 배치
- **시그니처 피자 삭제 (UI에서 제거, 번역 키는 보존)**:
  - Spicy Cheddar Chicken (`menu.item.spicy.cheddar.chicken`)
  - Spicy Hawaiian with Ricotta (`menu.item.spicy.hawaiian.ricotta`)
  - Pesto Chicken (`menu.item.pesto.chicken`)
- **메뉴명 변경**:
  - `menu.item.meatball.ricotta.name`: `Meatball & Ricotta` → `Meatball & Ricotta cheese` (KO/EN 모두)
  - `menu.combo.4`: `Potato Bacon + Spicy Cheddar Chicken 🌶️` → `Potato Bacon + White Pie` (KO/EN 모두, 매운 표시 제거)
- **파스타 메인 메뉴 삭제 (UI에서 제거, 번역 키는 보존)**:
  - Creamy Pesto Shrimp (`menu.item.creamy.pesto.shrimp`)
- **메인 페이지 히어로 배너 슬라이드 - 원그로브점 이미지 추가**:
  - 파일: `components/HeroBanner.tsx`
  - 슬라이드 8번째(마지막)에 `/one_grove_2.jpg` 추가
  - 기존 인덱스 트릭(`[0, 2, 3, 4, 5, 6, 7]` + 마지막 override) 제거 → 단순 `HERO_SLIDES` 배열로 리팩토링 (가독성/유지보수성 향상)
  - dot navigation 배열도 자동 동기화 (배열 길이 기반)
- **메인 페이지 OUR MENU 캐러셀 동기화** (메뉴 페이지 변경사항 반영):
  - Page 2 CLASSIC PIZZAS: Hawaiian/Godfather 제거, White Pie 추가 (오른쪽 컬럼 첫번째, 4-3 균형)
  - Page 3 SIGNATURE PIZZAS: Spicy Cheddar Chicken/Spicy Hawaiian Ricotta/White Pie/Pesto Chicken 제거, Hawaiian/Godfather 추가, 순서 정리 (4-3 균형)
  - Page 4 PASTA: Creamy Pesto Shrimp 제거
  - Page 5 DRINKS: BEER 컬럼에 House Wine 추가, SOFT DRINK 컬럼에 Sprite 추가 (Coke 다음, 6개 총합)
- **신규 매장 추가 - 바토스 앤 폴리스 원그로브점 (마곡)**:
  - 영문: `VATOS & PAULIE'S ONE GROVE MALL` / 한글: `바토스 앤 폴리스 원그로브점`
  - 주소: 서울 강서구 공항대로 165 B동 1층 E116, E117, E118호
  - 전화: 02-6244-9651
  - 영업시간: 매일 10:30 - 22:00 (라스트오더 21:00)
  - 주차: 가능, 대중교통: 마곡역 1번 출구에서 129m
  - 다국어 키 (KO/EN): `location.onegrove.*` (메인 카드용) + `locations.onegrove.*` (Locations 상세 페이지용)
  - 매장 사진: `/one_grove.jpg` (대표), `/one_grove_2.jpg` (갤러리 추가)
  - 메인 페이지(`app/page.tsx`): 5번째 카드로 추가 (2x2+1 → sm:grid-cols-2 lg:grid-cols-2 자동 배치)
  - Locations 페이지(`app/locations/page.tsx`): STORES 배열 4번째 항목 + images 배열에 두 사진 추가
  - Google Maps iframe: `?q=165+Gonghang-daero,+Gangseo-gu,+Seoul,+South+Korea&z=17&output=embed`
- **메인 페이지 - OUR RESTAURANTS 섹션 신규 추가** (Locations 다음):
  - 위치: `app/page.tsx` 최하단 (Locations Section 다음)
  - 자매 브랜드 2개 박스: **Maple Tree (단풍나무집)**, **Vatos (바토스)**
  - 호버 시 이미지 전환: `*_box.png` ↔ `*_rollover.png` (opacity 300ms transition)
  - 외부 링크 (target=\"_blank\"):
    - Maple Tree → http://mapletreehouse.co.kr/kor/html/main.asp
    - Vatos → http://vatoskorea.com/sub/menu.html
  - 다국어 키: `main.restaurants.title` (KO/EN 모두 'OUR RESTAURANTS'), `main.restaurants.maple.name`, `main.restaurants.vatos.name`
  - 접근성: aria-label, focus-visible ring(`#fc492d`), 장식 이미지 `aria-hidden`
- **드링크 - WINE 섹션 신규 추가** (BEER와 SOFT DRINK 사이):
  - `menu.category.drinks.wine`: `Wine` (KO/EN 공통)
  - `menu.wine.house.name`: `House Wine`
  - `menu.wine.house.desc`: `Glass / Bottle` (가격은 미표기)
- **드링크 - SOFT DRINK 수정** (이미지 기준):
  - `menu.drinks.coke.name`: `Coke, Coke Zero, Sprite (355ml)` → `Coke, Coke Zero (355ml)` (Sprite 분리)
  - `menu.drinks.sprite.name` 신규: `Sprite, Sprite Zero (355ml)`
  - `menu.drinks.pink.lemonade` UI에서 제거 (번역 키는 보존)
  - 순서: Coke → Sprite → Orange → Arizona → Pellegrino Lemon → Pellegrino Bottle
- **드링크(맥주) 섹션 설명/양조장 정보 업데이트** (이미지 기준, 가격은 미표기):
  - `menu.beer.budweiser.desc`: `ANHEUSER-BUSCH INBEV` → 깔끔한 아메리칸 스타일 프리미엄 라거 설명 (KO/EN 모두)
  - `menu.beer.stella.desc`: `사즈 홉` → `사츠 홉` 오타 수정 (KO)
  - 양조장 정보 줄바꿈(`<br>`)으로 분리 표시:
    - Apricot Wheat → Lost Coast Brewery
    - Weihenstephaner → 바이엔슈테판 / Weihenstephaner
    - Indica IPA → Lost Coast Brewery
- **Raspberry Wheat 자리 → Jeju Citrus Lager 교체 (2026-05-20)**:
  - 키 이름 변경: `menu.beer.raspberry.wheat.*` → `menu.beer.jeju.citrus.lager.*`
  - 이름: `Jeju Citrus Lager 5.0%`
  - 카테고리 태그: `WHEAT` → `LAGER`
  - 설명 KO: "시트러스한 귤과 한라봉의 향기를 느낄 수 있는 가벼운 라거"
  - 설명 EN: "A light lager with refreshing citrus notes of tangerine and Hallabong"
  - 양조장 표기 없음 (메뉴판 기준)
  - `menu.beer.magpie.pale.ale.desc`: 문장부호/줄바꿈 정리 (`특징,` → `특징.`, `부담없이` → `부담 없이`, 마침표 추가)
  - EN 영문판은 양조장 표기 형식을 ` - Brewery`에서 `<br>Brewery`로 통일
- **최종 구성**:
  - 클래식(7): NY Cheese, Pepperoni, Pepperoni Mushroom, Margherita, White Pie, NY Supreme, Meat Lovers
  - 시그니처(7): Potato Bacon, BBQ Chicken, Devils Delight, Meatball & Ricotta cheese, BMO, Hawaiian, Godfather

## 최근 완료된 작업 (2024)

### 헤더 언어 전환 기능 추가
- **위치**: 헤더 네비게이션 맨 오른쪽 (LOCATIONS 다음)
- **구현**: KO / EN 버튼 추가
- **스타일**: `text-sm font-normal` (레귤러 굵기, 작은 크기)
- **적용 범위**: 
  - `app/page.tsx` (메인 페이지 데스크톱/모바일)
  - `components/Header.tsx` (다른 페이지들 데스크톱/모바일)

### 위치 페이지 이미지 최종 설정
- **경로**: `app/locations/page.tsx`
- **이미지 배열**:
  1. `/coex_2.jpg` - COEX 매장 벽면 아트워크
  2. `/coex_1.jpg` - COEX 매장 인테리어 1
  3. `/d_tower_2.jpg` - D-Tower 매장
  4. `/coex.jpg` - COEX 매장 인테리어 2
  5. `/d_tower_3.jpg` - D-Tower 매장 추가 이미지
  6. `/hum.JPG` - Camp Humphreys 매장

## 현재 활성 기능들

### 메인 페이지 (`app/page.tsx`)
- 6초 자동 슬라이드 배너
- MenuFadeSlider: 4개 이미지 (1pg.jpg, pizza.jpg, pizza_1.jpg, drink.jpg)
- 스크롤 진행 표시기
- 애니메이션 효과 (Framer Motion)

### 메뉴 페이지 (`app/menu/page.tsx`)
- 5초 자동 슬라이드 전환
- 8초 줌 애니메이션 (`animate-zoom-in`)
- 5개 이미지: 1pg.jpg, pizza.jpg, pizza_1.jpg, drink.jpg, menu-1.png

### 위치 페이지 (`app/locations/page.tsx`)
- 수동 네비게이션 (좌우 화살표)
- 썸네일 갤러리
- 매장별 탭 전환
- Google Maps 연동

## 보호 상태
- **Git 커밋**: `c42222e` - 모든 변경사항 커밋 완료
- **안정성**: 명시적 지시 없이 핵심 기능 변경 금지
- **이미지 고정**: 위치 페이지 이미지 배열 보호됨

## Next Steps
현재 기능적으로 완성된 상태이며, 추가 요청사항이 있을 때만 변경 진행 
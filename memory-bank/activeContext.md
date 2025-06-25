# Active Context - Current State

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
  4. `/paradise.jpg` - Paradise City 매장
  5. `/coex.jpg` - COEX 매장 인테리어 2
  6. `/location-dtower.jpg` - D-Tower 기본 이미지

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
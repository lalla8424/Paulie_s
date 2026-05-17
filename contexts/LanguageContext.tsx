"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ko' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 번역 데이터
const translations = {
  ko: {
    // 네비게이션
    'nav.home': 'HOME',
    'nav.menu': 'MENU',
    'nav.about': 'ABOUT US',
    'nav.locations': 'LOCATIONS',
    
    // 메뉴 카테고리
    'menu.appetizers': 'APPETIZERS',
    'menu.pizza': 'BRICK OVEN PIZZA',
    'menu.pasta': 'PASTA',
    'menu.drinks': 'DRINKS',
    
    // 메인 페이지
    'main.title': '뉴욕 스타일 피자',
    'main.subtitle': '정통 브릭 오븐 피자',
    'main.menu.title': 'Our Menu',
    'main.about.title': 'Our Story',
    'main.about.description1': '뉴욕에서 시작된 우리의 피자 여정은 최고의 재료와 전통적인 기법에 중점을 두고 있습니다. 우리는 정통 뉴욕 스타일을 우리 동네로 가져와, 품질 좋은 재료와 전통 기법에 초점을 맞추고 있습니다.',
    'main.about.description2': '모든 피자는 손으로 늘려서 맞춤형 브릭 오븐에서 구워지며, 뉴욕 피자로 유명한 완벽한 바삭하면서도 쫄깃한 크러스트를 만들어냅니다. 우리는 단순히 피자를 만드는 것이 아니라 전통을 이어가고 있습니다.',
    'main.locations.title': '매장 위치',
    'main.restaurants.title': 'OUR RESTAURANTS',
    'main.restaurants.maple.name': 'Maple Tree',
    'main.restaurants.vatos.name': 'Vatos',
    
    // About Us 페이지
    'about.title': 'OUR STORY',
    'about.history': '미국의 피자는 1900년대 후반, 남부 이탈리아 이민자 들에 의해 미국에 소개되었습니다.\n뉴욕스타일의 피자는 풍부한 토핑과 흡사 마술같이 얇고 바삭한 도우입니다.\n시간이 지나며 반죽은 점차 얇고 바삭하며 쫄깃한 식감으로 발전하였고, 이는 오늘날 우리가 알고 있는 뉴욕 스타일 피자의 탄생으로 이어졌습니다.\n뉴욕 스타일의 조각피자의 접혀있는 이미지는 영화 및 대중문화에 자주 등장할 정도로 친숙한 모습입니다. 폴리스 브릭오븐 피자리아는 2015년, 이 정통 뉴욕의 맛을 한국에 전하고자 시작되었습니다.',
    
    'about.feature1.title': '직접 수입한 프리미엄 재료',
    'about.feature1.description': '정통 뉴욕 스타일 피자에 대한 저희의 고집을 지키기 위해, 폴리스는 핵심 재료인 밀가루, 토마토 소스, 치즈 등을 모두 미국에서 직접 수입하여 사용합니다. 정통 뉴욕 피자를 선보이기 위해 실제 뉴욕 피자 전문가와 같은 품질의 원재료를 사용하여, 우리는 정통 뉴욕피자와 동일한 맛과 품질의 결과를 재현할 수 있습니다.',
    
    'about.feature2.title': '정통 벽돌 오븐 사용',
    'about.feature2.description': '뉴욕 피자리아의 오븐을 그대로 재현한 대형 벽돌 오븐을 맞춤 제작하여 사용하고 있습니다. 500-600°F(약 260-315°C)의 고온에서 구워내는 피자는 겉은 바삭하고 속은 쫄깃한 완벽한 식감을 자랑합니다.',
    
    'about.feature3.title': '차별화된 기술',
    'about.feature3.description': '모든 메뉴는 매장에서 직접 신선하게 준비되며, 폴리스만의 독창적인 레시피와 숙련된 피자마스터의 전문 반죽 기술이 조화를 이루어, 어디서도 맛볼 수 없는 정통 뉴욕 스타일 피자를 선사합니다.',
    
    'about.quote': '폴리스 피자리아는 한국의 고객들에게 진정한\n뉴욕 피자의 경험을 제공하는 것입니다.\n진짜 뉴욕피자를 만드는 폴리스 피자리아는\n국내 최고의 정통 뉴욕 스타일 프리미엄 피자입니다.',
    
    // 매장 정보
    'location.parnas': 'PARNAS MALL COEX SAMSUNG',
    'location.parnas.korean': '삼성동 파르나스몰',
    'location.parnas.address': '서울특별시 강남구 테헤란로 521, 지하1층 F13호(삼성동, 파르나스타워)',
    'location.dtower': 'D-TOWER GWANGHWAMUN',
    'location.dtower.korean': '광화문 디타워',
    'location.dtower.address': '서울특별시 종로구 종로3길 17, 2층 5호 (청진동, 디타워)',
    'location.humphreys': 'CAMP HUMPHREYS',
    'location.humphreys.korean': '험프리기지',
    'location.humphreys.address': '경기도 평택시 팽성읍 안정순환로 118(주한미군험프리기지 bldg12385)',
    'location.onegrove': "VATOS & PAULIE'S ONE GROVE MALL",
    'location.onegrove.korean': '마곡 원그로브몰',
    'location.onegrove.address': '서울 강서구 공항대로 165 B동 1층 E116, E117, E118호',
    
    // Locations 페이지
    'locations.parnas.name': 'PARNAS MALL',
    'locations.parnas.sub': '삼성동 파르나스몰',
    'locations.parnas.address': '서울특별시 강남구 테헤란로 521, 지하1층 F13호(삼성동, 파르나스타워)',
    'locations.parnas.tel': '02-3453-2700',
    'locations.parnas.hours': '매일 11:00 - 22:00 (라스트오더 21:00)',
    'locations.parnas.parking': '주차 가능',
    'locations.parnas.transit': '삼성역 5번 출구에서 89m',
    
    
    'locations.dtower.name': 'D-TOWER',
    'locations.dtower.sub': '광화문 디타워',
    'locations.dtower.address': '서울특별시 종로구 종로3길 17, 2층 5호 (청진동, 디타워)',
    'locations.dtower.tel': '02-2251-8200',
    'locations.dtower.hours': '월-금 11:00-22:00 (브레이크타임 15:00-17:00), 토-일 11:30-22:00 (라스트오더 21:00)',
    'locations.dtower.parking': '주차 가능',
    'locations.dtower.transit': '광화문역 4번 출구에서 307m',
    
    'locations.humphreys.name': 'CAMP HUMPHREYS',
    'locations.humphreys.sub': '험프리기지',
    'locations.humphreys.address': '경기도 평택시 팽성읍 안정순환로 118(주한미군험프리기지 bldg12385)',
    'locations.humphreys.tel': '031-8042-1000',
    'locations.humphreys.hours': '월-금 11:00-21:00 (브레이크타임 14:00-16:30, 라스트오더 20:30), 토-일 11:30-21:00 (라스트오더 20:30)',
    'locations.humphreys.parking': '주차 가능',
    'locations.humphreys.transit': '주한미군기지 내',

    'locations.onegrove.name': 'ONE GROVE MALL',
    'locations.onegrove.sub': '바토스 앤 폴리스 원그로브점',
    'locations.onegrove.address': '서울 강서구 공항대로 165 B동 1층 E116, E117, E118호',
    'locations.onegrove.tel': '02-6244-9651',
    'locations.onegrove.hours': '매일 10:30 - 22:00 (라스트오더 21:00)',
    'locations.onegrove.parking': '주차 가능',
    'locations.onegrove.transit': '마곡나루역 인근',
    
    'locations.hours.label': '운영시간:',
    'locations.tel.label': '예약/문의:',
    'locations.parking.label': '주차:',
    'locations.transit.label': '대중교통:',
    
    // 메뉴 섹션 제목들 (메인 페이지용)
    'menu.main.appetizers': '에피타이저',
    'menu.main.salads': '샐러드',
    'menu.main.pizza.classic': '폴리스 클래식 피자',
    'menu.main.pizza.signature': '폴리스 시그니처 피자',
    'menu.main.pasta': '파스타',
    'menu.main.pasta.baked': '베이크드 파스타',
    'menu.main.drinks': '음료',
    
    // 메뉴 페이지 카테고리
    'menu.category.appetizers': 'APPETIZERS',
    'menu.category.pizza': 'BRICK OVEN PIZZA',
    'menu.category.pasta': 'PASTA',
    'menu.category.drinks': 'DRINKS',
    'menu.category.wings': 'FAMOUS FRESH WINGS',
    'menu.category.pasta.baked': 'BAKED PASTA',
    'menu.category.pizza.classic': "Paulie's Classic Pizzas",
    'menu.category.pizza.signature': "Paulie's Signature Pizzas",
    'menu.category.pizza.combos': 'Favorite Combos',
    'menu.category.drinks.beer': 'Draft Beers',
    'menu.category.drinks.wine': 'Wine',
    'menu.category.drinks.soft': 'Soft Drinks',
    
    // 메뉴 아이템들
    'menu.item.garlic.fries.name': 'Garlic Cheese Fries 👍',
    'menu.item.garlic.fries.desc': '**갈릭 치즈 프라이즈** 향긋한 마늘향이 입안을 감도는 감자튀김',
    'menu.item.meatballs.name': "Paulie's Meatballs",
    'menu.item.meatballs.desc': '* WITH MOZZARELLA CHEESE OPTION\n**폴리스 미트볼스** 폴리스 오리지널 레시피로 만든 미트볼 (치즈 옵션 가능)',
    'menu.item.honey.wings.name': 'Honey Tequila Wings 🌶️',
            'menu.item.honey.wings.desc': '**허니 데킬라 윙** 달콤하고 매콤한 데킬라 소스가 입혀진 치킨 윙',
    'menu.item.buffalo.wings.name': 'Buffalo Hot Wings 🌶️',
            'menu.item.buffalo.wings.desc': '**버팔로 핫 윙** 버팔로 소스를 입혀 시큼한향이 코를 자극하는 가장 클래식한 치킨 윙',
    'menu.item.bbq.wings.name': "Paulie's BBQ Wings",
            'menu.item.bbq.wings.desc': '**폴리스 바비큐 윙** 바비큐 소스로 맛을 낸 치킨윙',
    'menu.wings.quality': '🍗 FRESH WINGS - NEVER FROZEN / 폴리스에서는 100% 국내산 냉장육만 사용합니다.',
    
    // Salads
    'menu.category.salads': 'SALADS',
    'menu.item.house.salad.name': 'Paulie\'s House Salad (Ranch or Balsamic)',
    'menu.item.house.salad.desc': '**하우스 샐러드 (랜치/발사믹)**',
    'menu.item.caesar.salad.name': 'Chicken Caesar Salad',
    'menu.item.caesar.salad.desc': '**치킨 시저 샐러드**',
    
    // Pizza Items
    'menu.item.ny.cheese.name': 'New York Cheese',
    'menu.item.ny.cheese.desc': '**뉴욕치즈** 토마토 소스, 모짜렐라치즈',
    'menu.item.hawaiian.name': 'Hawaiian',
    'menu.item.hawaiian.desc': '**하와이안** 토마토 소스, 햄, 베이컨, 파인애플, 모짜렐라 치즈',
    'menu.item.pepperoni.name': 'Pepperoni',
            'menu.item.pepperoni.desc': '**페퍼로니** 토마토 소스, 미국산 오리지널 페퍼로니, 모짜렐라 치즈',
    'menu.item.godfather.name': 'Godfather 🌶️',
    'menu.item.godfather.desc': '**갓파더** 디아블로 소스, 소고기, 마늘, 페퍼로니, 이탈리안 소시지, 모짜렐라, 양파, 할라피뇨',
    'menu.item.pepperoni.mushroom.name': 'Pepperoni & Mushrooms 👍',
    'menu.item.pepperoni.mushroom.desc': '**페퍼로니&머쉬룸** 토마토 소스, 페퍼로니, 모짜렐라 치즈, 버섯',
    'menu.item.ny.supreme.name': 'NY Supreme 👍',
            'menu.item.ny.supreme.desc': '**뉴욕슈프림** 토마토 소스, 소고기, 이탈리안 소시지, 햄, 모짜렐라, 양파, 버섯, 올리브, 페퍼로니',
    'menu.item.margherita.name': 'Margherita 👍',
    'menu.item.margherita.desc': '**마르게리타** 토마토 소스, 후레쉬 모짜렐라, 모짜렐라 치즈, 바질, 올리브오일',
    'menu.item.meat.lovers.name': 'Meat Lovers',
    'menu.item.meat.lovers.desc': '**미트 러버스** 토마토 소스, 모짜렐라 치즈, 소고기, 이탈리안 소시지, 페퍼로니, 베이컨, 햄',
    
    // Signature Pizzas
    'menu.item.potato.bacon.name': 'Potato Bacon 👍',
    'menu.item.potato.bacon.desc': '**포테이토 베이컨** 크림 소스, 감자, 모짜렐라 치즈, 체다 치즈, 베이컨, 햄',
    'menu.item.white.pie.name': 'White Pie',
            'menu.item.white.pie.desc': '**화이트 파이** 크림 소스, 모짜렐라 치즈, 리코타, 고르곤졸라, 파마산치즈, 꿀',
    'menu.item.spicy.cheddar.chicken.name': 'Spicy Cheddar Chicken 🌶️',
    'menu.item.spicy.cheddar.chicken.desc': '**스파이시 체다 치킨** 크림 소스, 모짜렐라 치즈, 체다 치즈, 닭고기, 햄, 베이컨, 양파, 버섯, 마늘, 할라피뇨',
    'menu.item.meatball.ricotta.name': 'Meatball & Ricotta cheese',
    'menu.item.meatball.ricotta.desc': '**미트볼&리코타치즈** 토마토 소스, 미트볼, 리코타치즈, 모짜렐라, 이탈리안 파슬리',
    'menu.item.bbq.chicken.name': 'BBQ Chicken',
    'menu.item.bbq.chicken.desc': '**비비큐 치킨** 바비큐 소스, 닭고기, 파인애플, 양파, 모짜렐라 치즈, 체다 치즈, 햄, 베이컨',
    'menu.item.bmo.name': 'Beef Mushroom & Onions (BMO)',
    'menu.item.bmo.desc': '**비프 머쉬룸 어니언** 토마토 소스, 모짜렐라, 양파, 소고기, 버섯',
    'menu.item.devils.delight.name': 'Devil\'s Delight 🌶️',
            'menu.item.devils.delight.desc': '**데블스 딜라이트** 토마토 소스, 후레쉬 모짜렐라, 모짜렐라 치즈, 페퍼로니, 청양고추, 건고추, 꿀',
    'menu.item.pesto.chicken.name': 'Pesto Chicken',
            'menu.item.pesto.chicken.desc': '**페스토 치킨** 페스토소스, 모짜렐라 치즈, 닭고기, 체리토마토, 페타치즈, 마늘',
    'menu.item.spicy.hawaiian.ricotta.name': 'Spicy Hawaiian with Ricotta 🌶️',
            'menu.item.spicy.hawaiian.ricotta.desc': '**스파이시 하와이안 위드 리코타** 토마토 소스, 햄, 파인애플, 할라피뇨, 모짜렐라 치즈, 리코타치즈, 바질',
    
    // Favorite Combos
    'menu.combo.1.name': '1. Pepperoni + Hawaiian',
    'menu.combo.1.desc': '페퍼로니 + 하와이안',
    'menu.combo.2.name': '2. Margherita + NY Cheese',
    'menu.combo.2.desc': '마르게리타 + 뉴욕치즈',
    'menu.combo.3.name': '3. NY Supreme + Pepperoni & Mushrooms',
            'menu.combo.3.desc': '뉴욕슈프림 + 페퍼로니 & 머쉬룸',
    'menu.combo.4.name': '4. Potato Bacon + White Pie',
    'menu.combo.4.desc': '포테이토 베이컨 + 화이트 파이',
    
    // Pasta Items
    'menu.category.pasta.main': 'Pasta',
    'menu.item.spaghetti.meatballs.name': 'Paulie\'s Classic Spaghetti and Meatballs 👍',
    'menu.item.spaghetti.meatballs.desc': '**토마토 소스 미트볼 파스타** 미국 현지에서 가장 많이 찾는 파스타',
    'menu.item.shrimp.rosso.name': 'Shrimp Rosso 👍',
            'menu.item.shrimp.rosso.desc': '**쉬림프 로제** 로제소스와 새우, 베이컨이 들어간 리가토니 파스타',
    'menu.item.chicken.carbonara.name': 'Chicken Carbonara',
            'menu.item.chicken.carbonara.desc': '**치킨 까르보나라** 고소한 크림소스에 닭고기를 넣어 만든 화이트 파스타',
    'menu.item.bolognese.diavolo.name': 'Bolognese Alla Diavolo 🌶️',
    'menu.item.bolognese.diavolo.desc': '**볼로네제 알라 디아블로** 다진 소고기와 돼지고기가 들어있는 매콤하고 감칠맛 나는 알라 디아블로 파스타',
    'menu.item.rigatoni.arribiata.name': 'Rigatoni Arribiata 🌶️🌶️🌶️',
    'menu.item.rigatoni.arribiata.desc': '**리가토니 아라비아타** 매운 고추를 넣은 토마토 아라비아타 소스와 상큼한 바질을 함께 즐길 수 있는 리가토니 파스타',
    'menu.item.creamy.pesto.shrimp.name': 'Creamy Pesto Shrimp',
    'menu.item.creamy.pesto.shrimp.desc': '**크리미 페스토 쉬림프** 크림소스에 바질페스토와 마늘, 새우를 넣어 만든 꾸덕한 파스타',
    'menu.item.chicken.parmesan.name': 'Chicken Parmesan Pasta',
    'menu.item.chicken.parmesan.desc': '**치킨 파마산 파스타** 토마토소스에 파마산 치즈가 들어간 시즈닝으로 짭조름하게 튀겨진 닭가슴살을 함께 즐길 수 있는 파스타',
    
    // Baked Pasta
    'menu.item.baked.ziti.name': 'Baked Ziti',
    'menu.item.baked.ziti.desc': '**베이크드 지티** 리가토니에 토마토 소스와 모짜렐라 치즈를 듬뿍 얹어 600°F의 브릭오븐에 구운 파스타',
    'menu.item.baked.spinach.chicken.name': 'Baked Spinach Chicken',
    'menu.item.baked.spinach.chicken.desc': '**베이크드 스피니지 치킨** 크림소스에 시금치, 닭고기, 버섯, 양파와 함께 모짜렐라 치즈를 얹어 600°F의 브릭오븐에 구운 파스타',
    'menu.item.rigatoni.lasagna.name': 'Paulie\'s Rigatoni Lasagna',
    'menu.item.rigatoni.lasagna.desc': '**폴리스 리가토니 라자냐** 토마토소스에 풍미가 가득한 베샤멜소스, 리코타치즈, 다진 소고기, 돼지고기가 들어간 리가토니 파스타',
    
    // Beer Types
    'menu.beer.lager.title': 'LAGER',
    'menu.beer.lager.desc': '우리나라에서 제조되는 대부분의 맥주들이 라거 맥주이며 높은 청량감으로 톡 쏘고 시원한 맛이 일품인 맥주입니다.',
    'menu.beer.wheat.title': 'WHEAT',
    'menu.beer.wheat.desc': '보리 맥아 이외에 밀(Wheat)을 사용하여 풍부한 거품과 흰색에 가까운 빚깔을 내는 부드럽고 신맛이 있는 맥주입니다.',
    'menu.beer.ipa.title': 'IPA',
    'menu.beer.ipa.desc': '인디아 페일 에일의 약자로 과거 영국 식민지 시절, 인도로 맥주를 보낼 때 홉을 더 첨가하여 쓴맛이 특징인 맥주로 은은한 단맛이 감돕니다.',
    'menu.beer.ale.title': 'ALE',
    'menu.beer.ale.desc': '에일은 진한 향과 맛으로 상면발효 방식을 사용하는 영국식 맥주이며 라거보다는 더 쓴 맥주입니다.',
    'menu.beer.stout.title': 'STOUT',
    'menu.beer.stout.desc': '스타우트는 아일랜드에서 시작된 상면발효맥주의 한 종류로, 검게 구운 맥아를 풍부하게 사용해서 검은색에 가까우며, 알코올 도수는 4~11%로 다양하고 홉을 많이 사용해 맛이 진합니다.',
    
    // Beer Menu Items
    'menu.beer.budweiser.name': 'Budweiser 5.0%',
    'menu.beer.budweiser.desc': '깔끔한 옥넘김을 선사하는 아메리칸 스타일의 프리미엄 라거',
    'menu.beer.magpie.kolsh.name': 'Magpie Kolsh 4.8%',
    'menu.beer.magpie.kolsh.desc': '라거공법으로 숙성, 특유의 꽃향과 라이트한 바디감으로 금세 잔이 비워지는 신기한 에일스타일 라거맥주',
    'menu.beer.stella.name': 'Stella Artois 5.0%',
    'menu.beer.stella.desc': '최상급 사츠 홉을 사용해 쌉쌀함과 청량한 산미, 진한 꽃향을 느낄 수 있는 필스너',
    'menu.beer.apricot.wheat.name': 'Apricot Wheat 5.0%',
    'menu.beer.apricot.wheat.desc': '부드러운 탄산과 함께 살구, 복숭아의 맛과 향을 느낄 수 있는 위트 에일<br>Lost Coast Brewery',
    'menu.beer.raspberry.wheat.name': 'Raspberry Wheat 6.2%',
    'menu.beer.raspberry.wheat.desc': '크리미하고 새콤달콤한 라즈베리로 가득 찬 클래식한 독일 스타일 밀 맥주<br>Gorilla Brewery',
    'menu.beer.weihenstephaner.name': 'Weihenstephaner 5.4%',
    'menu.beer.weihenstephaner.desc': '바나나 향과 은은한 단맛, 적당한 바디감과 부드러운 질감이 조화로운 밀 맥주<br>바이엔슈테판',
    'menu.beer.gorilla.ipa.name': 'Gorilla IPA 5.4%',
    'menu.beer.gorilla.ipa.desc': '감귤, 오렌지의 느낌 그리고 카라멜, 토피의 단맛이 전면에 드러나고 홉 스파이시로 마무리되는 IPA',
    'menu.beer.indica.ipa.name': 'Indica IPA 6.5%',
    'menu.beer.indica.ipa.desc': '시트러스한 자몽, 귤, 꽃향기와 쌉싸름한 홉의 밸런스가 환상적인 IPA<br>Lost Coast Brewery',
    'menu.beer.magpie.pale.ale.name': 'Magpie Pale Ale 4.8%',
    'menu.beer.magpie.pale.ale.desc': '입안 가득 느껴지는 열대과일향과 감귤류의 풍미가 매력적이며 쌉쌀한 끝맛이 특징.<br>깔끔하고 가벼운 바디감으로 매일 부담 없이 즐기기 좋은 맥주.',
    'menu.beer.peanut.butter.name': 'Peanut Butter 5.6%',
    'menu.beer.peanut.butter.desc': '피넛버터, 커피, 토피, 바닐라 웨이퍼의 조화를 이루어 바삭하고 달지않게 마무리하는 맥주',
    
    // Soft Drinks
    'menu.drinks.coke.name': 'Coke, Coke Zero (355ml)',
    'menu.drinks.sprite.name': 'Sprite, Sprite Zero (355ml)',
    'menu.drinks.pellegrino.lemon.name': 'San Pellegrino Lemon (330ml)',
    'menu.drinks.orange.juice.name': 'Orange Juice (350ml)',
    'menu.drinks.pellegrino.bottle.name': 'San Pellegrino (750ml bottle)',
    'menu.drinks.arizona.tea.name': 'Arizona Iced Tea (650ml)',
    'menu.drinks.pink.lemonade.name': 'Old Fashion Pink Lemonade',
    'menu.wine.house.name': 'House Wine',
    'menu.wine.house.desc': 'Glass / Bottle',
    
    // Limited Availability Label
    'menu.limited': '소량 한정',
    
    // 푸터
    'footer.contact': '연락처',
    'footer.hours': '운영시간',
    'footer.social': '소셜미디어',
    'footer.copyright': 'PAULIE\'S. All rights reserved.',
    'footer.office.title': 'HEAD OFFICE ADDRESS',
    'footer.office.address': '서울특별시 송파구 송파대로 558, 월드타워 18층',
  },
  en: {
    // 네비게이션
    'nav.home': 'HOME',
    'nav.menu': 'MENU',
    'nav.about': 'ABOUT US',
    'nav.locations': 'LOCATIONS',
    
    // 메뉴 카테고리
    'menu.appetizers': 'APPETIZERS',
    'menu.pizza': 'BRICK OVEN PIZZA',
    'menu.pasta': 'PASTA',
    'menu.drinks': 'DRINKS',
    
    // 메인 페이지
    'main.title': 'New York Style Pizza',
    'main.subtitle': 'Authentic Brick Oven Pizza',
    'main.menu.title': 'Our Menu',
    'main.about.title': 'Our Story',
    'main.about.description1': 'Our pizza journey began in New York, where we learned the art of brick oven pizza making from the best in the business. We brought that authentic New York style to our neighborhood, focusing on quality ingredients and traditional techniques.',
    'main.about.description2': 'Every pizza is hand-stretched and baked in our custom brick oven, giving it that perfect crispy-yet-chewy crust that New York pizza is famous for. We\'re not just making pizza – we\'re continuing a legacy.',
    'main.locations.title': 'Our Locations',
    'main.restaurants.title': 'OUR RESTAURANTS',
    'main.restaurants.maple.name': 'Maple Tree',
    'main.restaurants.vatos.name': 'Vatos',
    
    // About Us 페이지
    'about.title': 'OUR STORY',
    'about.history': 'Pizza was introduced to America in the late 1900s by Southern Italian immigrants.\nNew York-style pizza is characterized by its rich toppings and magically thin, crispy dough.\nOver time, the dough evolved to become thinner, crispier, and chewier, leading to the birth of what we know today as New York-style pizza.\nThe iconic image of folded New York-style pizza slices is so familiar that it frequently appears in movies and popular culture. Paulie\'s Brick Oven Pizzeria was established in 2015 to bring this authentic New York taste to Korea.',
    
    'about.feature1.title': 'Premium Imported Ingredients',
    'about.feature1.description': 'To maintain our commitment to authentic New York-style pizza, Paulie\'s imports all key ingredients including flour, tomato sauce, and cheese directly from the United States. By using the same quality ingredients as actual New York pizza experts, we can reproduce the same taste and quality as authentic New York pizza.',
    
    'about.feature2.title': 'Authentic Brick Oven',
    'about.feature2.description': 'We use custom-made large brick ovens that replicate those found in New York pizzerias. Pizzas baked at high temperatures of 500-600°F (approximately 260-315°C) boast the perfect texture - crispy on the outside and chewy on the inside.',
    
    'about.feature3.title': 'Distinctive Techniques',
    'about.feature3.description': 'All menu items are freshly prepared in-store, combining Paulie\'s unique recipes with the expert dough-making techniques of skilled pizza masters to deliver authentic New York-style pizza that cannot be found anywhere else.',
    
    'about.quote': 'Paulie\'s Pizzeria is dedicated to providing\nKorean customers with a true New York pizza experience.\nPaulie\'s Pizzeria, which makes real New York pizza,\nis Korea\'s finest authentic New York-style premium pizza.',
    
    // 매장 정보
    'location.parnas': 'PARNAS MALL COEX SAMSUNG',
    'location.parnas.korean': 'Samseong-dong Parnas Mall',
    'location.parnas.address': '521 Teheran-ro, Gangnam-gu, Seoul, B1F F13 (Samseong-dong, Parnas Tower)',
    'location.dtower': 'D-TOWER GWANGHWAMUN',
    'location.dtower.korean': 'Gwanghwamun D-Tower',
    'location.dtower.address': '17 Jongno 3-gil, Jongno-gu, Seoul, 2F 5 (Cheongjin-dong, D-Tower)',
    'location.humphreys': 'CAMP HUMPHREYS',
    'location.humphreys.korean': 'Camp Humphreys',
    'location.humphreys.address': '118 Anjeong Sunhwan-ro, Paengseong-eup, Pyeongtaek-si, Gyeonggi-do (USAG Humphreys bldg12385)',
    'location.onegrove': "VATOS & PAULIE'S ONE GROVE MALL",
    'location.onegrove.korean': 'Magok One Grove Mall',
    'location.onegrove.address': 'E116, E117, E118, 1F, Building B, 165 Gonghang-daero, Gangseo-gu, Seoul, South Korea',
    
    // Locations 페이지
    'locations.parnas.name': 'PARNAS MALL',
    'locations.parnas.sub': 'Samseong-dong Parnas Mall',
    'locations.parnas.address': '521 Teheran-ro, Gangnam-gu, Seoul, B1F F13 (Samseong-dong, Parnas Tower)',
    'locations.parnas.tel': '02-3453-2700',
    'locations.parnas.hours': 'Daily 11:00 - 22:00 (Last Order 21:00)',
    'locations.parnas.parking': 'Available',
    'locations.parnas.transit': 'Samseong Station Exit 5, 89m walk',
    
    
    'locations.dtower.name': 'D-TOWER',
    'locations.dtower.sub': 'Gwanghwamun D-Tower',
    'locations.dtower.address': '17 Jongno 3-gil, Jongno-gu, Seoul, 2F 5 (Cheongjin-dong, D-Tower)',
    'locations.dtower.tel': '02-2251-8200',
    'locations.dtower.hours': 'Mon-Fri 11:00-22:00 (Break 15:00-17:00), Sat-Sun 11:30-22:00 (Last Order 21:00)',
    'locations.dtower.parking': 'Available',
    'locations.dtower.transit': 'Gwanghwamun Station Exit 4, 307m walk',
    
    'locations.humphreys.name': 'CAMP HUMPHREYS',
    'locations.humphreys.sub': 'Camp Humphreys',
    'locations.humphreys.address': '118 Anjeong Sunhwan-ro, Paengseong-eup, Pyeongtaek-si, Gyeonggi-do (USAG Humphreys bldg12385)',
    'locations.humphreys.tel': '031-8042-1000',
    'locations.humphreys.hours': 'Mon-Fri 11:00-21:00 (Break 14:00-16:30, Last Order 20:30), Sat-Sun 11:30-21:00 (Last Order 20:30)',
    'locations.humphreys.parking': 'Available',
    'locations.humphreys.transit': 'Within USAG Humphreys',

    'locations.onegrove.name': 'ONE GROVE MALL',
    'locations.onegrove.sub': 'One Grove Mall, Magok',
    'locations.onegrove.address': 'E116, E117, E118, 1F, Building B, 165 Gonghang-daero, Gangseo-gu, Seoul, South Korea',
    'locations.onegrove.tel': '02-6244-9651',
    'locations.onegrove.hours': 'Daily 10:30 - 22:00 (Last Order 21:00)',
    'locations.onegrove.parking': 'Available',
    'locations.onegrove.transit': 'Near Magongnaru Station',
    
    'locations.hours.label': 'Hours:',
    'locations.tel.label': 'Reservation/Inquiry:',
    'locations.parking.label': 'Parking:',
    'locations.transit.label': 'Public Transportation:',
    
    // 메뉴 섹션 제목들 (메인 페이지용)
    'menu.main.appetizers': 'APPETIZERS',
    'menu.main.salads': 'SALADS',
    'menu.main.pizza.classic': "Paulie's Classic Pizzas",
    'menu.main.pizza.signature': "Paulie's Signature Pizzas",
    'menu.main.pasta': 'PASTA',
    'menu.main.pasta.baked': 'BAKED PASTA',
    'menu.main.drinks': 'DRINKS',
    
    // 메뉴 페이지 카테고리
    'menu.category.appetizers': 'APPETIZERS',
    'menu.category.pizza': 'BRICK OVEN PIZZA',
    'menu.category.pasta': 'PASTA',
    'menu.category.drinks': 'DRINKS',
    'menu.category.wings': 'FAMOUS FRESH WINGS',
    'menu.category.pasta.baked': 'BAKED PASTA',
    'menu.category.pizza.classic': "Paulie's Classic Pizzas",
    'menu.category.pizza.signature': "Paulie's Signature Pizzas",
    'menu.category.pizza.combos': 'Favorite Combos',
    'menu.category.drinks.beer': 'Draft Beers',
    'menu.category.drinks.wine': 'Wine',
    'menu.category.drinks.soft': 'Soft Drinks',
    
    // 메뉴 아이템들
    'menu.item.garlic.fries.name': 'Garlic Cheese Fries 👍',
    'menu.item.garlic.fries.desc': 'Crispy garlic cheese fries with aromatic garlic flavor that fills your mouth',
    'menu.item.meatballs.name': "Paulie's Meatballs",
    'menu.item.meatballs.desc': '* WITH MOZZARELLA CHEESE OPTION\nPaulie\'s signature meatballs made with our original recipe (cheese option available)',
    'menu.item.honey.wings.name': 'Honey Tequila Wings 🌶️',
    'menu.item.honey.wings.desc': 'Sweet and spicy chicken wings glazed with honey tequila sauce',
    'menu.item.buffalo.wings.name': 'Buffalo Hot Wings 🌶️',
    'menu.item.buffalo.wings.desc': 'Classic buffalo wings with tangy sauce that tingles your nose - the most traditional chicken wings',
    'menu.item.bbq.wings.name': "Paulie's BBQ Wings",
    'menu.item.bbq.wings.desc': 'Chicken wings flavored with BBQ sauce',
    'menu.wings.quality': '🍗 FRESH WINGS - NEVER FROZEN / We use only 100% fresh domestic chicken.',
    
    // Salads
    'menu.category.salads': 'SALADS',
    'menu.item.house.salad.name': 'Paulie\'s House Salad (Ranch or Balsamic)',
    'menu.item.house.salad.desc': 'Fresh house salad with your choice of ranch or balsamic dressing',
    'menu.item.caesar.salad.name': 'Chicken Caesar Salad',
    'menu.item.caesar.salad.desc': 'Classic Caesar salad topped with grilled chicken',
    
    // Pizza Items
    'menu.item.ny.cheese.name': 'New York Cheese',
    'menu.item.ny.cheese.desc': 'Classic New York pizza with tomato sauce and mozzarella cheese',
    'menu.item.hawaiian.name': 'Hawaiian',
    'menu.item.hawaiian.desc': 'Tomato sauce, ham, bacon, pineapple, and mozzarella cheese',
    'menu.item.pepperoni.name': 'Pepperoni',
    'menu.item.pepperoni.desc': 'Tomato sauce, premium American pepperoni, and mozzarella cheese',
    'menu.item.godfather.name': 'Godfather 🌶️',
    'menu.item.godfather.desc': 'Tomato sauce, ground beef, garlic, pepperoni, Italian sausage, mozzarella, onions, and jalapeños',
    'menu.item.pepperoni.mushroom.name': 'Pepperoni & Mushrooms 👍',
    'menu.item.pepperoni.mushroom.desc': 'Tomato sauce, pepperoni, mozzarella cheese, and fresh mushrooms',
    'menu.item.ny.supreme.name': 'NY Supreme',
    'menu.item.ny.supreme.desc': 'Tomato sauce, ground beef, Italian sausage, ham, mozzarella, onions, bell peppers, mushrooms, olives, and pepperoni',
    'menu.item.margherita.name': 'Margherita 👍',
    'menu.item.margherita.desc': 'Tomato sauce, fresh mozzarella, mozzarella cheese, basil, and olive oil',
    'menu.item.meat.lovers.name': 'Meat Lovers',
    'menu.item.meat.lovers.desc': 'Tomato sauce, mozzarella cheese, ground beef, Italian sausage, pepperoni, bacon, and ham',
    
    // Signature Pizzas
    'menu.item.potato.bacon.name': 'Potato Bacon 👍',
    'menu.item.potato.bacon.desc': 'Cream sauce, potato, mozzarella cheese, cheddar cheese, bacon, and ham',
    'menu.item.white.pie.name': 'White Pie',
    'menu.item.white.pie.desc': 'Cream sauce, mozzarella, ricotta, gorgonzola, parmesan cheese, and scallions',
    'menu.item.spicy.cheddar.chicken.name': 'Spicy Cheddar Chicken 🌶️',
    'menu.item.spicy.cheddar.chicken.desc': 'Cream sauce, mozzarella, cheddar cheese, chicken, ham, bacon, onions, mushrooms, garlic, and jalapeños',
    'menu.item.meatball.ricotta.name': 'Meatball & Ricotta cheese',
    'menu.item.meatball.ricotta.desc': 'Tomato sauce, meatballs, ricotta cheese, mozzarella, and Italian parsley',
    'menu.item.bbq.chicken.name': 'BBQ Chicken',
    'menu.item.bbq.chicken.desc': 'BBQ sauce, chicken, pineapple, onions, mozzarella, cheddar cheese, ham, and bacon',
    'menu.item.bmo.name': 'Beef Mushroom & Onions (BMO)',
    'menu.item.bmo.desc': 'Tomato sauce, mozzarella, onions, ground beef, and mushrooms',
    'menu.item.devils.delight.name': 'Devil\'s Delight 🌶️',
    'menu.item.devils.delight.desc': 'Tomato sauce, fresh mozzarella, mozzarella cheese, pepperoni, Korean hot peppers, dried peppers, and scallions',
    'menu.item.pesto.chicken.name': 'Pesto Chicken',
    'menu.item.pesto.chicken.desc': 'Pesto sauce, mozzarella, chicken, cherry tomatoes, cheddar cheese, and garlic',
    'menu.item.spicy.hawaiian.ricotta.name': 'Spicy Hawaiian with Ricotta 🌶️',
    'menu.item.spicy.hawaiian.ricotta.desc': 'Tomato sauce, ham, pineapple, jalapeños, mozzarella cheese, ricotta cheese, and basil',
    
    // Favorite Combos
    'menu.combo.1.name': '1. Pepperoni + Hawaiian',
    'menu.combo.1.desc': 'Pepperoni + Hawaiian combination',
    'menu.combo.2.name': '2. Margherita + NY Cheese',
    'menu.combo.2.desc': 'Margherita + New York Cheese combination',
    'menu.combo.3.name': '3. NY Supreme + Pepperoni & Mushrooms',
    'menu.combo.3.desc': 'NY Supreme + Pepperoni & Mushrooms combination',
    'menu.combo.4.name': '4. Potato Bacon + White Pie',
    'menu.combo.4.desc': 'Potato Bacon + White Pie combination',
    
    // Pasta Items
    'menu.category.pasta.main': 'Pasta',
    'menu.item.spaghetti.meatballs.name': 'Paulie\'s Classic Spaghetti and Meatballs 👍',
    'menu.item.spaghetti.meatballs.desc': 'The most popular pasta in America with tomato sauce and meatballs',
    'menu.item.shrimp.rosso.name': 'Shrimp Rosso 👍',
    'menu.item.shrimp.rosso.desc': 'Rigatoni pasta with creamy sauce, shrimp, and bacon',
    'menu.item.chicken.carbonara.name': 'Chicken Carbonara',
    'menu.item.chicken.carbonara.desc': 'White pasta made with creamy sauce and chicken',
    'menu.item.bolognese.diavolo.name': 'Bolognese Alla Diavolo 🌶️',
    'menu.item.bolognese.diavolo.desc': 'Spicy and savory diavolo pasta with ground beef and pork',
    'menu.item.rigatoni.arribiata.name': 'Rigatoni Arribiata 🌶️🌶️🌶️',
    'menu.item.rigatoni.arribiata.desc': 'Rigatoni pasta with spicy arrabiata tomato sauce and fresh basil',
    'menu.item.creamy.pesto.shrimp.name': 'Creamy Pesto Shrimp',
    'menu.item.creamy.pesto.shrimp.desc': 'Rich pasta made with cream sauce, basil pesto, garlic, and shrimp',
    'menu.item.chicken.parmesan.name': 'Chicken Parmesan Pasta',
    'menu.item.chicken.parmesan.desc': 'Delicious pasta with tomato sauce and seasoned crispy chicken breast topped with parmesan cheese',
    
    // Baked Pasta
    'menu.item.baked.ziti.name': 'Baked Ziti',
    'menu.item.baked.ziti.desc': 'Rigatoni pasta with tomato sauce and mozzarella cheese, baked in our 600°F brick oven',
    'menu.item.baked.spinach.chicken.name': 'Baked Spinach Chicken',
    'menu.item.baked.spinach.chicken.desc': 'Cream sauce pasta with spinach, chicken, mushrooms, onions, and mozzarella cheese, baked in our 600°F brick oven',
    'menu.item.rigatoni.lasagna.name': 'Paulie\'s Rigatoni Lasagna',
    'menu.item.rigatoni.lasagna.desc': 'Rigatoni pasta with tomato sauce, rich béchamel sauce, ricotta cheese, ground beef, and pork',
    
    // Beer Types
    'menu.beer.lager.title': 'LAGER',
    'menu.beer.lager.desc': 'Most beers produced in Korea are lager beers, known for their refreshing, crisp, and cool taste.',
    'menu.beer.wheat.title': 'WHEAT',
    'menu.beer.wheat.desc': 'Made with wheat in addition to barley malt, producing rich foam and a smooth, refreshing beer with malty flavors.',
    'menu.beer.ipa.title': 'IPA',
    'menu.beer.ipa.desc': 'India Pale Ale, originally brewed with extra hops for shipment to India during British colonial times. Known for its bitter taste with subtle sweetness.',
    'menu.beer.ale.title': 'ALE',
    'menu.beer.ale.desc': 'Ale has a deep aroma and flavor, representing traditional continental beer. More bitter than lager, it\'s a classic British-style beer.',
    'menu.beer.stout.title': 'STOUT',
    'menu.beer.stout.desc': 'A type of top-fermented beer that originated in Ireland. Dark beer made with rich roasted malt, nearly black in color, with a slightly bitter taste and varying alcohol content of 4-11%. Uses lots of hops for a deep flavor.',
    
    // Beer Menu Items
    'menu.beer.budweiser.name': 'Budweiser 5.0%',
    'menu.beer.budweiser.desc': 'A premium American-style lager with a clean, crisp finish',
    'menu.beer.magpie.kolsh.name': 'Magpie Kolsh 4.8%',
    'menu.beer.magpie.kolsh.desc': 'Magpie Brewery Cologne lager, a German Bavarian golden beer with a beautiful color-changing glass style',
    'menu.beer.stella.name': 'Stella Artois 5.0%',
    'menu.beer.stella.desc': 'Using hops for a bitter finish and floral aroma, Belgian beer',
    'menu.beer.apricot.wheat.name': 'Apricot Wheat 5.0%',
    'menu.beer.apricot.wheat.desc': 'Wheat ale with apricot flavor, offering peach taste and aroma<br>Lost Coast Brewery',
    'menu.beer.raspberry.wheat.name': 'Raspberry Wheat 6.2%',
    'menu.beer.raspberry.wheat.desc': 'Creamy and sweet-tart raspberry beer with a refreshing finish<br>Gorilla Brewery',
    'menu.beer.weihenstephaner.name': 'Weihenstephaner 5.4%',
    'menu.beer.weihenstephaner.desc': 'Wheat beer with banana aroma, subtle sweetness, and smooth wheat texture<br>Weihenstephaner',
    'menu.beer.gorilla.ipa.name': 'Gorilla IPA 5.4%',
    'menu.beer.gorilla.ipa.desc': 'Citrus and orange flavors with a light, tropical finish and dry, hop-spicy ending',
    'menu.beer.indica.ipa.name': 'Indica IPA 6.5%',
    'menu.beer.indica.ipa.desc': 'Citrusy with complex hop balance<br>Lost Coast Brewery',
    'menu.beer.magpie.pale.ale.name': 'Magpie Pale Ale 4.8%',
    'menu.beer.magpie.pale.ale.desc': 'Clear hop flavors with citrus notes and a bitter finish.<br>Clean and light body, perfect for everyday enjoyment.',
    'menu.beer.peanut.butter.name': 'Peanut Butter 5.6%',
    'menu.beer.peanut.butter.desc': 'Harmony of peanut butter, coffee, toffee, and vanilla chai with a smooth, not-too-sweet finish',
    
    // Soft Drinks
    'menu.drinks.coke.name': 'Coke, Coke Zero (355ml)',
    'menu.drinks.sprite.name': 'Sprite, Sprite Zero (355ml)',
    'menu.drinks.pellegrino.lemon.name': 'San Pellegrino Lemon (330ml)',
    'menu.drinks.orange.juice.name': 'Orange Juice (350ml)',
    'menu.drinks.pellegrino.bottle.name': 'San Pellegrino (750ml bottle)',
    'menu.drinks.arizona.tea.name': 'Arizona Iced Tea (650ml)',
    'menu.drinks.pink.lemonade.name': 'Old Fashion Pink Lemonade',
    'menu.wine.house.name': 'House Wine',
    'menu.wine.house.desc': 'Glass / Bottle',
    
    // Limited Availability Label
    'menu.limited': 'Limited Quantity',
    
    // 푸터
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.social': 'Social Media',
    'footer.copyright': 'PAULIE\'S. All rights reserved.',
    'footer.office.title': 'HEAD OFFICE ADDRESS',
    'footer.office.address': '18F, WORLD TOWER Bldg, 558, Songpa-daero, Songpa-gu, Seoul, Republic of Korea',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko')

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 
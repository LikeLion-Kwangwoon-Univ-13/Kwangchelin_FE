/**
 * 룰렛 페이지에서 사용되는 옵션 카드 목록
 *
 * - to: 이동할 경로
 * - title: 카드 제목
 * - description: 카드 설명
 * - iconName: 표시할 아이콘 이름
 */

export const ROULETTE_OPTIONS = [
  {
    to: '/roulette/category',
    title: '무슨 메뉴를 먹을까?',
    description: '종류부터 정하기 어렵다면, 여기서부터 시작!',
    iconName: 'roulette-menu',
  },
  {
    to: '/roulette/restaurant',
    title: '어떤 식당을 갈까?',
    description: '지도는 잊으세요. 오늘의 길잡이는 룰렛!',
    iconName: 'roulette-restaurant',
  },
]

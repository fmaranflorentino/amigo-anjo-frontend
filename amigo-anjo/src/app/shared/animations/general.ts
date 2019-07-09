import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
  animateChild,
  group
} from '@angular/animations';

export const itemStateTrigger = trigger('itemState', [
  transition(':leave', [
    animate('500ms ease-in', keyframes([
      style({
        display: 'block',
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        transform: 'translateX(-15%)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ]),
  transition('slidUp => slidDown', [
    style({
      display: 'block',
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition('slidDown => slidUp', [
    style({
      transform: 'translateY(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ])
]);

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    style({
      transform: 'translateY(100%)',
      opacity: 0
    }),
    animate('300ms .3s ease-out', style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0)',
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(100%)'
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(300, [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(15%)',
            offset: 0.4
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ])
    ], { optional: true })
  ])
]);

// export const slideInAnimation =
// trigger('routeAnimations', [
//   transition('DashPage <=> MyFriendsPage', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//        opacity: 0
//       })
//     ], { optional: true }),
//     query(':enter', [
//       style({ opacity: 0 })
//     ], { optional: true }),
//     query(':leave', animateChild(),{ optional: true }),
//     group([
//       query(':leave', [
//         animate('300ms ease-out', style({ opacity: '0'}))
//       ],{ optional: true }),
//       query(':enter', [
//         animate('300ms ease-out', style({ opacity: 1}))
//       ],{ optional: true })
//     ]),
//     query(':enter', animateChild(),{ optional: true }),
//   ])
// ]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('MyFriendsPage => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('DashPage => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('About => Contact', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
  ]);
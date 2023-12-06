export function compose<T1, T2>(f1: (arg: T1) => T2): (arg: T1) => T2;
export function compose<T1, T2, T3>(f1: (arg: T1) => T2, f2: (arg: T2) => T3): (arg: T1) => T3;
export function compose<T1, T2, T3, T4>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4): (arg: T1) => T4;
export function compose<T1, T2, T3, T4, T5>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5): (arg: T1) => T5;
export function compose<T1, T2, T3, T4, T5, T6>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6): (arg: T1) => T6;
export function compose<T1, T2, T3, T4, T5, T6, T7>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7): (arg: T1) => T7;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8): (arg: T1) => T8;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9): (arg: T1) => T9;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10): (arg: T1) => T10;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11): (arg: T1) => T11;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12): (arg: T1) => T12;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13): (arg: T1) => T13;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14): (arg: T1) => T14;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15): (arg: T1) => T15;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16): (arg: T1) => T16;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17): (arg: T1) => T17;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18): (arg: T1) => T18;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19): (arg: T1) => T19;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20): (arg: T1) => T20;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21): (arg: T1) => T21;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22): (arg: T1) => T22;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23): (arg: T1) => T23;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24): (arg: T1) => T24;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24, f24: (arg: T24) => T25): (arg: T1) => T25;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24, f24: (arg: T24) => T25, f25: (arg: T25) => T26): (arg: T1) => T26;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24, f24: (arg: T24) => T25, f25: (arg: T25) => T26, f26: (arg: T26) => T27): (arg: T1) => T27;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24, f24: (arg: T24) => T25, f25: (arg: T25) => T26, f26: (arg: T26) => T27, f27: (arg: T27) => T28): (arg: T1) => T28;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24, f24: (arg: T24) => T25, f25: (arg: T25) => T26, f26: (arg: T26) => T27, f27: (arg: T27) => T28, f28: (arg: T28) => T29): (arg: T1) => T29;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24, f24: (arg: T24) => T25, f25: (arg: T25) => T26, f26: (arg: T26) => T27, f27: (arg: T27) => T28, f28: (arg: T28) => T29, f29: (arg: T29) => T30): (arg: T1) => T30;
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31>(f1: (arg: T1) => T2, f2: (arg: T2) => T3, f3: (arg: T3) => T4, f4: (arg: T4) => T5, f5: (arg: T5) => T6, f6: (arg: T6) => T7, f7: (arg: T7) => T8, f8: (arg: T8) => T9, f9: (arg: T9) => T10, f10: (arg: T10) => T11, f11: (arg: T11) => T12, f12: (arg: T12) => T13, f13: (arg: T13) => T14, f14: (arg: T14) => T15, f15: (arg: T15) => T16, f16: (arg: T16) => T17, f17: (arg: T17) => T18, f18: (arg: T18) => T19, f19: (arg: T19) => T20, f20: (arg: T20) => T21, f21: (arg: T21) => T22, f22: (arg: T22) => T23, f23: (arg: T23) => T24, f24: (arg: T24) => T25, f25: (arg: T25) => T26, f26: (arg: T26) => T27, f27: (arg: T27) => T28, f28: (arg: T28) => T29, f29: (arg: T29) => T30, f30: (arg: T30) => T31): (arg: T1) => T31;

export function compose(...fs: Function[]) {
  return (arg: any) => fs.reduce((acc, f) => f(acc), arg);
}

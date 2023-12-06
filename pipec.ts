export function pipec<T1>(f1: (arg: T1) => T1): (arg: T1) => T1;
export function pipec<T2, T1>(f2: (arg: T1) => T2, f1: (arg: T1) => T2): (arg: T1) => T2;
export function pipec<T3, T2, T1>(f3: (arg: T2) => T3, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T3;
export function pipec<T4, T3, T2, T1>(f4: (arg: T3) => T4, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T4;
export function pipec<T5, T4, T3, T2, T1>(f5: (arg: T4) => T5, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T5;
export function pipec<T6, T5, T4, T3, T2, T1>(f6: (arg: T5) => T6, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T6;
export function pipec<T7, T6, T5, T4, T3, T2, T1>(f7: (arg: T6) => T7, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T7;
export function pipec<T8, T7, T6, T5, T4, T3, T2, T1>(f8: (arg: T7) => T8, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T8;
export function pipec<T9, T8, T7, T6, T5, T4, T3, T2, T1>(f9: (arg: T8) => T9, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T9;
export function pipec<T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f10: (arg: T9) => T10, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T10;
export function pipec<T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f11: (arg: T10) => T11, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T11;
export function pipec<T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f12: (arg: T11) => T12, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T12;
export function pipec<T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f13: (arg: T12) => T13, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T13;
export function pipec<T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f14: (arg: T13) => T14, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T14;
export function pipec<T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f15: (arg: T14) => T15, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T15;
export function pipec<T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f16: (arg: T15) => T16, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T16;
export function pipec<T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f17: (arg: T16) => T17, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T17;
export function pipec<T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f18: (arg: T17) => T18, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T18;
export function pipec<T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f19: (arg: T18) => T19, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T19;
export function pipec<T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f20: (arg: T19) => T20, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T20;
export function pipec<T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f21: (arg: T20) => T21, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T21;
export function pipec<T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f22: (arg: T21) => T22, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T22;
export function pipec<T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f23: (arg: T22) => T23, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T23;
export function pipec<T24, T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f24: (arg: T23) => T24, f23: (arg: T23) => T24, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T24;
export function pipec<T25, T24, T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f25: (arg: T24) => T25, f24: (arg: T24) => T25, f23: (arg: T23) => T24, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T25;
export function pipec<T26, T25, T24, T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f26: (arg: T25) => T26, f25: (arg: T25) => T26, f24: (arg: T24) => T25, f23: (arg: T23) => T24, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T26;
export function pipec<T27, T26, T25, T24, T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f27: (arg: T26) => T27, f26: (arg: T26) => T27, f25: (arg: T25) => T26, f24: (arg: T24) => T25, f23: (arg: T23) => T24, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T27;
export function pipec<T28, T27, T26, T25, T24, T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f28: (arg: T27) => T28, f27: (arg: T27) => T28, f26: (arg: T26) => T27, f25: (arg: T25) => T26, f24: (arg: T24) => T25, f23: (arg: T23) => T24, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T28;
export function pipec<T29, T28, T27, T26, T25, T24, T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f29: (arg: T28) => T29, f28: (arg: T28) => T29, f27: (arg: T27) => T28, f26: (arg: T26) => T27, f25: (arg: T25) => T26, f24: (arg: T24) => T25, f23: (arg: T23) => T24, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T29;
export function pipec<T30, T29, T28, T27, T26, T25, T24, T23, T22, T21, T20, T19, T18, T17, T16, T15, T14, T13, T12, T11, T10, T9, T8, T7, T6, T5, T4, T3, T2, T1>(f30: (arg: T29) => T30, f29: (arg: T29) => T30, f28: (arg: T28) => T29, f27: (arg: T27) => T28, f26: (arg: T26) => T27, f25: (arg: T25) => T26, f24: (arg: T24) => T25, f23: (arg: T23) => T24, f22: (arg: T22) => T23, f21: (arg: T21) => T22, f20: (arg: T20) => T21, f19: (arg: T19) => T20, f18: (arg: T18) => T19, f17: (arg: T17) => T18, f16: (arg: T16) => T17, f15: (arg: T15) => T16, f14: (arg: T14) => T15, f13: (arg: T13) => T14, f12: (arg: T12) => T13, f11: (arg: T11) => T12, f10: (arg: T10) => T11, f9: (arg: T9) => T10, f8: (arg: T8) => T9, f7: (arg: T7) => T8, f6: (arg: T6) => T7, f5: (arg: T5) => T6, f4: (arg: T4) => T5, f3: (arg: T3) => T4, f2: (arg: T2) => T3, f1: (arg: T1) => T2): (arg: T1) => T30;

export function pipec(...fs: Function[]) {
  return (arg: any) => fs.reduce((prev, f) => f(prev), arg);
}
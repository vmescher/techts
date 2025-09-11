interface DebounceOptions {
	leading?: boolean;
	trailing?: boolean;
}

export function debounce<F extends (...args: any[]) => void>(
	func: F,
	delay = 300,
	{ leading = false, trailing = false }: DebounceOptions = {},
) {
	let timerId: ReturnType<typeof setTimeout> | undefined;
	let lastArgs: Parameters<F> | undefined;
	let lastThis: ThisParameterType<F> | undefined;
	let invokedLeading = false;

	const invoke = () => {
		func.apply(lastThis, lastArgs!);
		lastArgs = lastThis = undefined;
	};

	const debounced = function (this: ThisParameterType<F>, ...args: Parameters<F>) {
		lastArgs = args;
		// eslint-disable-next-line ts/no-this-alias
		lastThis = this;

		if (timerId)
			clearTimeout(timerId);

		if (leading && !invokedLeading) {
			invoke();
			invokedLeading = true;
		}

		timerId = setTimeout(() => {
			timerId = undefined;
			if (trailing && (!leading || invokedLeading)) {
				invoke();
			}
			invokedLeading = false;
		}, delay);
	} as F & {
		cancel: () => void;
		flush: () => void;
	};

	debounced.cancel = () => {
		if (timerId) {
			clearTimeout(timerId);
			timerId = undefined;
		}
		invokedLeading = false;
		lastArgs = lastThis = undefined;
	};

	debounced.flush = () => {
		if (timerId) {
			clearTimeout(timerId);
			timerId = undefined;
			if (lastArgs) {
				invoke();
			}
			invokedLeading = false;
		}
	};

	return debounced;
}

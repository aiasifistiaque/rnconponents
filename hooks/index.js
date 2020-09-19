import { useState, useEffect } from 'react';

export function useStyle(props, obj) {
	//for all the properties in a single object
	let [styleName, setStyleName] = useState(obj.default || {});
	useEffect(() => {
		Object.keys(props).forEach(prop =>
			Object.keys(obj).forEach(key => {
				if (key === prop) setStyleName(obj[key]);
			})
		);
	}, [styleName]);
	return styleName;
}

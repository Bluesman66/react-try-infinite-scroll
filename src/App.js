import React, { useCallback, useEffect, useRef, useState } from 'react';
import { fetchFirstItems, fetchMoreItems } from 'actions';

export default function App() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const eof = useRef(false);

	useEffect(() => {
		setLoading(true);
		fetchFirstItems().then((items) => {
			setItems(items);
			setLoading(false);
		});
	}, []);

	const observer = useRef();
	const lastBookElementRef = useCallback((node) => {
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !eof.current) {
				setLoading(true);
				fetchMoreItems(() => (eof.current = true)).then((items) => {
					setItems(items);
					setLoading(false);
				});
			}
		});
		if (node) observer.current.observe(node);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="container">
				<div className="columns is-multiline">
					{items.map((item) => (
						<div key={item.id} className="column is-one-quarter">
							<figure ref={lastBookElementRef} key={item.id} className="image">
								<img src={item.titleImage} alt="" />
							</figure>
						</div>
					))}
					<div>{loading && 'Loading...'}</div>
				</div>
			</div>
		</>
	);
}

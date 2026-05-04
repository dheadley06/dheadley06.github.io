import { useId, useState } from "react";

/**
 * @typedef {Object} AccordionItem
 * @property {string} title
 * @property {string} subtitle
 * @property {string} body
 */

/**
 * @param {{ items?: AccordionItem[], maxVisible?: number }} props
 */
export default function Accordion(props) {
	const { items = [], maxVisible = 4 } = props;

	const [openIndex, setOpenIndex] = useState(null);
	const idPrefix = useId();

	function handleToggle(index) {
		setOpenIndex((current) => (current === index ? null : index));
	}

	return (
		<div className="about__accordion" role="list" style={{ "--accordion-max-visible": maxVisible }}>
			<div className="about__accordion-scroll">
				{items.map((item, index) => {
					const isOpen = openIndex === index;
					const panelId = `${idPrefix}-panel-${index}`;

					return (
						<article className="about__accordion-item" role="listitem" key={item.title}>
							<button
								type="button"
								className="about__accordion-header"
								onClick={() => handleToggle(index)}
								aria-expanded={isOpen}
								aria-controls={panelId}
							>
								<span className="about__accordion-text">
									<span className="about__accordion-title">{item.title}</span>
									<span className="about__accordion-subtitle">{item.subtitle}</span>
								</span>
								<span className="about__accordion-toggle" aria-hidden="true">
									{isOpen ? "-" : "+"}
								</span>
							</button>

							<div id={panelId} className={`about__accordion-body${isOpen ? " is-open" : ""}`}>
								<p>{item.body}</p>
							</div>
						</article>
					);
				})}
			</div>
			<div className="about__accordion-fade" aria-hidden="true" />
		</div>
	);
}

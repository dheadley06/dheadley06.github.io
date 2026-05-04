/**
 * @typedef {Object} ListItem
 * @property {string} title
 * @property {string} subtitle
 * @property {string} body
 * @property {string} [href]
 * @property {string} [actionHref]
 * @property {string} [actionLabel]
 */

/**
 * @param {{ items?: ListItem[], withBuyButton?: boolean }} props
 */
export default function ScrollableList(props) {
  const { items = [], withBuyButton = false } = props;

  return (
    <div className="writing__list" role="list">
      <div className="writing__list-scroll">
        {items.map((item) => {
          if (withBuyButton) {
            return (
              <article className="writing__list-item writing__list-item-featured" role="listitem" key={`${item.title}-${item.subtitle}`}>
                <div className="writing__list-content">
                  <p className="writing__list-title">{item.title}</p>
                  <p className="writing__list-sub">{item.subtitle}</p>
                  <p className="writing__list-body">{item.body}</p>
                </div>
                <div className="writing__list-actions">
                  <a className="button__orange writing__buy-link" href={item.actionHref || "#"}>
                    {item.actionLabel || "buy me"}
                  </a>
                </div>
              </article>
            );
          }

          return (
            <a className="writing__list-item writing__list-item-link" role="listitem" href={item.href || "#"} key={`${item.title}-${item.subtitle}`}>
              <p className="writing__list-title">{item.title}</p>
              <p className="writing__list-sub">{item.subtitle}</p>
              <p className="writing__list-body">{item.body}</p>
            </a>
          );
        })}
      </div>
      <div className="writing__list-fade" aria-hidden="true" />
    </div>
  );
}

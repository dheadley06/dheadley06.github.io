import { useMemo, useState } from "react";

/**
 * @typedef {Object} DesignFilter
 * @property {string} key
 * @property {string} label
 */

/**
 * @typedef {Object} DesignProject
 * @property {string} title
 * @property {string} context
 * @property {string} body
 * @property {string} category
 * @property {string} [image]
 */

/**
 * @param {{ filters?: DesignFilter[], projects?: DesignProject[] }} props
 */
export default function DesignGrid({ filters = [], projects = [] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className="design__portfolio">
      <h2>web design<br /><em>& other development projects</em></h2>
      <hr />

      <div className="design__filters" role="tablist" aria-label="Project category filters">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.key}
            className={`design__filter design__filter--${filter.key}${activeFilter === filter.key ? " is-active" : ""}`}
            onClick={() => setActiveFilter(filter.key)}
            role="tab"
            aria-selected={activeFilter === filter.key}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="design__grid" role="list">
        {visibleProjects.map((project) => (
          <article className="design__card" role="listitem" key={`${project.title}-${project.context}`}>
            <div className={`design__thumb design__thumb--${project.category}`}>
              {project.image ? (
                <img
                  className="design__thumb-image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
              ) : null}
              <span className={`design__badge design__badge--${project.category}`}>
                {project.category.toUpperCase()}
              </span>
            </div>

            <div className="design__info">
              <p className="design__title">{project.title}</p>
              <p className="design__context">{project.context}</p>
              <p className="design__body">{project.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

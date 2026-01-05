import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({ 'is-active': activeTabId === tab.id })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href="#tab-1"
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs[activeTabId].content}
      </div>
    </div>
  );
};

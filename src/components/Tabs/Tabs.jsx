import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, currentTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li
            className={cn({ 'is-active': activeTabId === tabs[0].id })}
            data-cy="Tab"
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => onTabSelected(tabs[0])}
            >
              Tab 1
            </a>
          </li>

          <li
            className={cn({ 'is-active': activeTabId === tabs[1].id })}
            data-cy="Tab"
          >
            <a
              href="#tab-2"
              data-cy="TabLink"
              onClick={() => onTabSelected(tabs[1])}
            >
              Tab 2
            </a>
          </li>

          <li
            className={cn({ 'is-active': activeTabId === tabs[2].id })}
            data-cy="Tab"
          >
            <a
              href="#tab-3"
              data-cy="TabLink"
              onClick={() => onTabSelected(tabs[2])}
            >
              Tab 3
            </a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

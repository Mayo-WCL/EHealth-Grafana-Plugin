import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { locationService } from "@grafana/runtime"
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {/* <svg
        className={styles.svg}
        width={width}
        height={height}
        onClick={() => {
          // console.log("Clicked")
          console.log(locationService.getLocation())
          // locationService.partial({"from": "1594671549256"}, true)
          // locationService.partial({"to": "1644671549256"}, true)
          locationService.push({"from": "1594671549256", "to": "1644671549256"})
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>
          <circle style={{ fill: `${theme.isLight ? theme.palette.greenBase : theme.palette.yellow}` }} r={100} />
        </g>
      </svg> */}
      <button onClick={() => {
        console.log(locationService.getLocation())
        locationService.partial({"from": "1594671549256"}, true)
        locationService.partial({"to": "1644671549256"}, true)
        locationService.reload()
        // locationService.push({"from": "1594671549256", "to": "1644671549256", "orgId": 1})

      }} className="css-1a8393j-button">Next</button>

      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
            `}
          >
            Number of series: {data.series.length}
          </div>
        )}
        <div>Text option value: {JSON.stringify(data.timeRange)} </div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});

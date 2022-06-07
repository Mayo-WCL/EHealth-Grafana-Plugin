import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { locationService } from "@grafana/runtime"
import { stylesFactory } from '@grafana/ui';
import CSS from 'csstype';
interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme();
  const styles = getStyles();
  const leftStyle: CSS.Properties = {
    float: 'left',
  }
  const rightStyle: CSS.Properties = {
    float: 'right',
  }
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
      <table width="100%">
        <tbody>
          <tr>
            <td width="50%">
              <button onClick={() => {
                console.log(locationService.getLocation())
                locationService.partial({"from": "1594671549256"}, true)
                locationService.partial({"to": "1644671549256"}, true)
                locationService.reload()
                // locationService.push({"from": "1594671549256", "to": "1644671549256", "orgId": 1})

              }} style={leftStyle} className="css-1a8393j-button">Previous Interval</button>
            </td>
            <td width="50%">
              <button onClick={() => {
                console.log(locationService.getLocation())
                locationService.partial({"from": "1594671549256"}, true)
                locationService.partial({"to": "1644671549256"}, true)
                locationService.reload()
                // locationService.push({"from": "1594671549256", "to": "1644671549256", "orgId": 1})

              }} style={rightStyle} className="css-1a8393j-button">Next Interval</button>
            </td>
          </tr>
        </tbody>
      </table>
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

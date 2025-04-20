Этот проект создан с целью изучения и практического освоения **Webpack** и его экосистемы.

## 🚀 Что я здесь реализовал

- Настроил **раздельные конфигурации** для development и production:
    - `webpack.config.dev.js`
    - `webpack.config.prod.js`
- Вынес общую часть в **`webpack.config.common.js`**.
- Подключил и настроил следующие плагины:
    - `HtmlWebpackPlugin` — для генерации HTML на основе шаблона.
    - `MiniCssExtractPlugin` — для выделения CSS в отдельные файлы.
    - `CopyPlugin` — для копирования статических файлов (иконки, изображения, звуки).
- Добавил поддержку:
    - `CSS` и `SCSS` с `postcss-preset-env`
    - Шрифтов и других ресурсов (`woff`, `ttf` и т.д.)
- Настроил:
    - **Source maps** для dev и production
    - **Минификацию** CSS и JS с помощью `CssMinimizerPlugin` и `TerserPlugin`
- Настроил **локальный dev-сервер**:
    - Автооткрытие браузера
    - Hot Module Replacement (HMR)
- Переписал проект на **TypeScript**:

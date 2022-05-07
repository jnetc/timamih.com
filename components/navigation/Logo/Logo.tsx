import styles from './logo.module.css';
export const Logo = () => {
  return (
    <div className={styles.module}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.3 182.3">
        <defs>
          <style></style>
        </defs>
        <g id={styles.logo}>
          <path
            className={styles.ribbon_ends}
            d="M239.6 92l51.4-9V27.5l-51.4 9V92z"
          />
          <path
            className={styles.ribbon_folds}
            d="M270.4 40.2l-30.8-3.7v9l30.8-5.3z"
          />
          <path
            className={styles.ribbon_ends}
            d="M2.2 164.7L67 153.3v-70L2 95v70z"
          />
          <path
            className={styles.ribbon_folds}
            d="M38.3 145.4l28.6 8v-13l-28.7 5z"
          />
          <path
            id="circle"
            className={styles.ribbon}
            d="M153 150.6A59.5 59.5 0 1 1 212.5 91a59.5 59.5 0 0 1-59.5 59.6zm0-118A58.5 58.5 0 1 0 211.5 91 58.5 58.5 0 0 0 153 32.8z"
          />
          <g id={styles.stars}>
            <path
              className={styles.ribbon}
              d="M150.3 18l1.7 3.2 3.5.4-2.4 2.6.8 3.5-3.2-1.5-3 1.7.3-3.6-2.7-2.4 3.5-.7 1.5-3.2zM131.4 21.3L134 24l3.4-.7-1.7 3.2 1.6 3.2-3.5-.7-2.5 2.5-.5-3.5-3.2-1.7 3.3-1.5.4-3.5zM114 29.2l3 2 3.4-1.5-.8 3.4L122 36l-3.6.3-1.8 3.2-1.4-3.3-3.5-1 2.8-2.2-.4-3.6zM99.4 41.4l3.4 1 2.8-2.2v3.6l3 2-3.3 1-1 3.6-2-3-3.7.3 2-3-1.2-3.3zM88.3 57H92l2-2.8 1 3.4 3.4 1-3 2.2v3.5l-2.8-2-3.4 1 1.2-3.4-2-3zM81.7 75l3.5-1 1.3-3.3 1.8 3 3.6.3-2.4 2.7 1 3.4L87 79l-3 2 .3-3.7-2.8-2zM80 94l3-1.8.4-3.6L86 91l3.5-.6-1.5 3.2 1.8 3-3.6-.4-2.4 2.7-.6-3.6L80 94zM83 112.7l2.7-2.4-.5-3.6 3 1.7 3.3-1.6-.7 3.5 2.6 2.6-3.6.3-1.6 3.2-1.6-3.2-3.5-.6zM91 130l2-3-1.5-3.2 3.5.8 2.6-2.4.3 3.6 3 1.8-3.3 1.3-.7 3.4-2.4-2.7-3.5.4zM103.3 144.8l1-3.5-2.3-2.7h3.6l2-3 1.2 3.3 3.4.8-2.8 2.2v3.5l-2.8-2-3.3 1.3zM118.8 155.8v-3.6l-2.8-2 3.5-1 1-3.5 2 3h3.7l-2.2 2.8 1 3.4-3.3-1.3-3 2zM136.7 162.5l-.8-3.5-3.4-1.3 3-2 .2-3.4 2.7 2.3 3.5-1-1.4 3.4 2 3-3.6-.3-2.3 2.8zM155.7 164.3L154 161l-3.5-.3 2.4-2.6-.8-3.4 3.2 1.6 3-1.8-.3 3.5 2.7 2.3-3.5.7-1.5 3.3zM174.6 161l-2.5-2.5-3.4.5 1.7-3-1.6-3.3 3.5.6 2.5-2.5.5 3.6 3.2 1.6-3.3 1.5-.4 3.6zM192 153l-3-1.8-3.4 1.5.8-3.5-2.4-2.7 3.6-.2 1.8-3 1.4 3.2 3.5.7-2.8 2.3.4 3.6zM206.6 141l-3.4-1-2.8 2v-3.4l-3-2 3.3-1.2 1-3.4 2 2.8 3.7-.2-2 3 1.2 3.3zM217.7 125.3H214l-2 2.8-1-3.3-3.4-1 3-2V118l2.8 2.2 3.4-1-1.2 3.2 2 3zM224.3 107.4l-3.5 1-1.3 3.2-1.8-3-3.6-.2 2.4-2.8-1-3.4 3.4 1.4 3-2-.3 3.6 2.8 2.2zM226 88.4l-3 1.7-.4 3.7-2.6-2.5-3.5.8 1.5-3.3-1.8-3 3.6.4 2.4-2.5.6 3.5 3.3 1.4zM223 69.6l-2.7 2.5.5 3.6-3-1.7-3.3 1.5.7-3.5-2.6-2.5 3.6-.5 1.6-3.2 1.6 3.2 3.5.6zM215 52.3l-2 3 1.5 3.3-3.5-1-2.6 2.5-.3-3.4-3-1.8 3.3-1.4.7-3.5 2.4 2.6 3.5-.3zM202.7 37.6l-1 3.4 2.3 2.8h-3.6l-2 3-1-3.3-3.6-1 2.8-2v-3.7l2.8 2 3.3-1.2zM187.2 26.5V30l2.8 2.2-3.5 1-1 3.4-2-3h-3.7l2.2-2.8-1-3.4 3.3 1.2 3-2zM169.3 20l.8 3.3 3.4 1.3-3 2-.2 3.5-2.7-2.3-3.5 1 1.4-3.3-2-3 3.6.2 2.3-2.7z"
            />
          </g>
          <g id={styles.saw}>
            <path
              className={styles.ribbon}
              d="M227.8 99l.3-4v-4a79.5 79.5 0 0 1 11 13l-.8 4.6-1 4.5a78.7 78.7 0 0 0-9.4-14zM223.5 117.5c.5-1.2 1-2.5 1.3-3.8l1-3.8a78.6 78.6 0 0 1 7.3 15l-1.8 4.3-2 4a77 77 0 0 0-5.7-15.8zM214.7 134.3a78.2 78.2 0 0 0 4.2-6.7 77.3 77.3 0 0 1 3 16.5 86.5 86.5 0 0 1-5.8 7 75.7 75.7 0 0 0-1.5-16.7zM202 148.4l1.5-1.3 1.4-1.3 2.7-2.8a75.5 75.5 0 0 1-1 16.6L205 161l-2 1.3-1.8 1.3-2 1.2a75 75 0 0 0 2.8-16.4zM186.3 159l3.5-2 3.4-2a75 75 0 0 1-5 16 85.3 85.3 0 0 1-8.7 3.3 75.7 75.7 0 0 0 6.8-15.4zM168.4 165a78 78 0 0 0 7.7-2 75.3 75.3 0 0 1-9 14.2 88.7 88.7 0 0 1-9 1 77.2 77.2 0 0 0 10.4-13zM149.5 166.7a79.3 79.3 0 0 0 8 0A77 77 0 0 1 145 178a85 85 0 0 1-9-1 76.4 76.4 0 0 0 13.3-10.3zM130.8 163.6a75.7 75.7 0 0 0 7.7 2 75 75 0 0 1-14.7 8 88.4 88.4 0 0 1-8.5-3.5 76.6 76.6 0 0 0 15.5-6.4zM113.5 156l3.5 2 3.6 1.7a77 77 0 0 1-16.2 4.2l-3.8-2.7-3.6-2.8a79 79 0 0 0 16.5-2.6zM98.7 144l3 3 3 2.5a79 79 0 0 1-17 0 90.4 90.4 0 0 1-5.7-7 76.4 76.4 0 0 0 16.7 1.6zM87.2 129l2 3.4 2.4 3.3a75.7 75.7 0 0 1-16.3-4l-2-4.2-1-2-.8-2.2a80.3 80.3 0 0 0 7.8 3.4 76 76 0 0 0 8 2.3zM79.8 111.6l.5 2 .6 1.8.5 2 .7 1.7a75.6 75.6 0 0 1-7.5-3.4 80 80 0 0 1-7.2-4.5l-.5-2-.4-2.4-.4-2.3-.2-2.3a74.6 74.6 0 0 0 13.8 9.6zM77 92.8v6l.3 2a76.8 76.8 0 0 1-6.3-5.3 82.7 82.7 0 0 1-6-6.2V87c0-.8.2-1.5.3-2.3l.2-2.3.3-2.3A82 82 0 0 0 71 87a77.7 77.7 0 0 0 6 6zM79 74l-.4 1.8-.3 2-.3 2-.2 2a74.6 74.6 0 0 1-9-14l.6-2.3.7-2.2.8-2.2.8-2a80.5 80.5 0 0 0 3.4 7.8 75.2 75.2 0 0 0 4 7zM85.6 56.2c-.6 1.2-1.2 2.3-1.7 3.6l-1 1.7-.7 1.8a75.5 75.5 0 0 1-3-7.7 81 81 0 0 1-2.2-8.3l2.5-4 2.6-3.7a75.7 75.7 0 0 0 3.6 16.6zM96.4 40.6a78.8 78.8 0 0 0-5 6.2 76.4 76.4 0 0 1-1-16.8l3.2-3.2 3.5-3a79 79 0 0 0-.6 16.8zM110.7 28.2l-3.3 2.3-3 2.5a79 79 0 0 1 3-16.5l4-2.3 4-2a77.2 77.2 0 0 0-4.7 16zM127.7 19.7a76.8 76.8 0 0 0-7.4 3 76.6 76.6 0 0 1 7-15.2 87.5 87.5 0 0 1 9-2.2 75 75 0 0 0-8.6 14.4zM146.2 15.8a73.3 73.3 0 0 0-8 1A76.4 76.4 0 0 1 149 4a91 91 0 0 1 9.2.2 77 77 0 0 0-12 11.8zM165.2 16.5a77 77 0 0 0-8-1A77.3 77.3 0 0 1 171 5.8a89.7 89.7 0 0 1 9 2.4 75.4 75.4 0 0 0-14.6 8.5zM183.4 22a73.7 73.7 0 0 0-7.4-3 75.8 75.8 0 0 1 15.6-6l4 2 4 2.5a75 75 0 0 0-16.2 4.4zM199.6 31.8l-1.6-1.3-1.6-1.2-1.6-1L193 27a75.2 75.2 0 0 1 16.8-2l1.7 1.5 1.7 1.6 3.2 3.4a75.6 75.6 0 0 0-16.8.4zM213 45.3a75 75 0 0 0-5.3-6 75.8 75.8 0 0 1 16.7 2 90 90 0 0 1 5 7.7 77.4 77.4 0 0 0-16.5-3.7zM222.5 61.7l-1.7-3.6-1.8-3.4a77.2 77.2 0 0 1 15.6 6L236 65l1.4 4.4a78.7 78.7 0 0 0-15-7.7zM227.6 80l-.7-4-1-3.8a78.8 78.8 0 0 1 13.6 9.8c0 1.5.2 3 .4 4.6v4.6A79.6 79.6 0 0 0 227.6 80z"
            />
          </g>
          <path
            className={styles.ribbon}
            d="M38.3 145.4l232-39.6V40.2l-232 39.5v65.7z"
          />
          <path
            className={styles.name}
            d="M76 98.3l-9.2 1.4v20l-9 1.4v-20l-9.2 1.6v-7L76 91.5zM89.6 116l-9 1.5V90.7l9-1.4zM129 110l-9 1.3v-9.7q0-1.5.2-3t.2-2.8.3-2.8h-.2l-5.2 19-7 1L103 96q.2 1.3.4 2.6t.3 2.7 0 3v9.8l-8.2 1.3V88.4l12.7-2 4.2 14.8h.2l4.2-16 12.2-2zM162.8 104.5l-9.5 1.5-1.2-3.6-9.7 1.5-1.2 4-9 1.4L142 81l10.6-1.6zM147 87.7l-3 10 6.2-1-3-9zM212.8 96.7l-9 1.4v-9.6q0-1.5.2-3t.2-2.8.3-2.8h-.2l-5.2 19-7 1-5-17.2h-.3l.4 2.6.4 2.7v12.6l-8.2 1.3V75l12.7-2 4 15h.3l4.2-16.2 12.3-2zM227.7 94.3l-9 1.4V69l9-1.5zM262 89l-9 1.3V80l-10 1.7V92l-9 1.3V66.5l9-1.4v10l10-1.7v-9.8l9-1.4z"
          />
        </g>
      </svg>
    </div>
  );
};

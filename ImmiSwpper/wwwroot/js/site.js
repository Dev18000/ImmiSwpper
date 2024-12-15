window.registerInfiniteScroll = (dotNetHelper) => {
    const content = document.getElementById("content");

    content.addEventListener('scroll', function () {
        if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
            dotNetHelper.invokeMethodAsync('LoadMoreContent');
        }
    });
};

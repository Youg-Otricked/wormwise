const pages: HTMLDetailsElement | null = document.getElementById("pages-summary") as HTMLDetailsElement | null;
if (pages === null) {
  throw new Error("IDK Bro you deleted the details element why u do dat;");
} else {
  pages.addEventListener<'mouseenter'>('mouseenter', () => {
    pages.open = true;
    console.log("Entered");
  });

  pages.addEventListener<'mouseleave'>('mouseleave', () => {
    pages.open = false;
    console.log("Left")
  });
}
